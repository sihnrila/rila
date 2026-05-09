import axios from 'axios'

// 티스토리 블로그 ID (사용자가 변경해야 함)
const TISTORY_BLOG_ID = 'rilaa' // 여기에 티스토리 블로그 ID 입력

// RSS 피드 URL
const TISTORY_RSS_URL = `https://${TISTORY_BLOG_ID}.tistory.com/rss`

// XML 파싱 헬퍼 함수
const parseXML = (xmlString) => {
  const parser = new DOMParser()
  return parser.parseFromString(xmlString, 'text/xml')
}

// HTML 엔티티 디코딩
const decodeHTMLEntities = (text) => {
  const textarea = document.createElement('textarea')
  textarea.innerHTML = text
  return textarea.value
}

// HTML 태그 제거
const stripHTML = (html) => {
  if (!html) return ''
  // HTML 엔티티 먼저 디코딩
  const decoded = decodeHTMLEntities(html)
  const tmp = document.createElement('DIV')
  tmp.innerHTML = decoded
  return tmp.textContent || tmp.innerText || ''
}

// 날짜 포맷팅
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// RSS 피드에서 포스트 추출
const extractPostsFromRSS = (xmlDoc) => {
  const items = xmlDoc.querySelectorAll('item')
  const posts = []

  items.forEach((item, index) => {
    if (index >= 5) return

    const title = item.querySelector('title')?.textContent || ''
    const link = item.querySelector('link')?.textContent || ''
    const description = item.querySelector('description')?.textContent || ''
    const pubDate = item.querySelector('pubDate')?.textContent || ''
    const category = item.querySelector('category')?.textContent || ''

    // 썸네일 이미지 추출 (description에서 첫 번째 이미지 찾기)
    // HTML 엔티티 디코딩 후 이미지 찾기
    const decodedDescription = decodeHTMLEntities(description)
    const imgMatch = decodedDescription.match(/<img[^>]+src=["']([^"']+)["']/i) || 
                    decodedDescription.match(/src=["']([^"']+)["']/i)
    let thumbnail = imgMatch ? imgMatch[1] : null
    
    // 기본 이미지(no-image)는 썸네일로 사용하지 않음
    if (thumbnail && (thumbnail.includes('no-image') || thumbnail.includes('tistory_admin/static/images'))) {
      thumbnail = null
    }

    const cleanDescription = stripHTML(description)
    const shortDescription = cleanDescription.length > 150 
      ? cleanDescription.substring(0, 150) + '...' 
      : cleanDescription

    posts.push({
      title: stripHTML(title),
      link,
      description: shortDescription,
      date: formatDate(pubDate),
      category,
      thumbnail
    })
  })

  return posts
}

export const fetchTistoryPosts = async () => {
  try {
    const response = await axios.get(TISTORY_RSS_URL, {
      headers: { 'Accept': 'application/rss+xml, application/xml, text/xml' }
    })

    const xmlDoc = parseXML(response.data)
    if (xmlDoc.querySelector('parsererror')) throw new Error('XML 파싱 실패')

    return extractPostsFromRSS(xmlDoc)
  } catch (error) {
    // CORS 또는 네트워크 에러면 프록시로 재시도
    if (error.message?.includes('CORS') || error.code === 'ERR_NETWORK' || !error.response) {
      try {
        // Vite dev: vite.config.js 프록시, 프로덕션: Cloudflare Pages Function
        const proxyResponse = await axios.get('/api/tistory/rss', {
          headers: { 'Accept': 'application/xml, text/xml' },
          timeout: 10000
        })

        const xmlDoc = parseXML(proxyResponse.data)
        if (xmlDoc.querySelector('parsererror')) throw new Error('프록시 XML 파싱 실패')

        return extractPostsFromRSS(xmlDoc)
      } catch {
        return []
      }
    }
    return []
  }
}

// 티스토리 블로그 URL 반환
export const getTistoryBlogUrl = () => {
  return `https://${TISTORY_BLOG_ID}.tistory.com`
}
