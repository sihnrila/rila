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

  console.log('RSS 피드에서 발견된 아이템 수:', items.length)

  items.forEach((item, index) => {
    if (index >= 5) return // 최대 5개만 가져오기

    const title = item.querySelector('title')?.textContent || ''
    const link = item.querySelector('link')?.textContent || ''
    const description = item.querySelector('description')?.textContent || ''
    const pubDate = item.querySelector('pubDate')?.textContent || ''
    const category = item.querySelector('category')?.textContent || ''

    console.log(`포스트 ${index + 1}:`, { title, link, hasDescription: !!description })

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

  console.log('추출된 포스트:', posts)
  return posts
}

export const fetchTistoryPosts = async () => {
  console.log('티스토리 RSS 피드 가져오기 시작:', TISTORY_RSS_URL)
  
  try {
    // 먼저 직접 요청 시도
    const response = await axios.get(TISTORY_RSS_URL, {
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml'
      }
    })

    console.log('RSS 피드 응답 받음, 데이터 타입:', typeof response.data)
    console.log('RSS 피드 응답 길이:', response.data?.length)

    const xmlDoc = parseXML(response.data)
    
    // 파싱 에러 확인
    const parserError = xmlDoc.querySelector('parsererror')
    if (parserError) {
      console.error('XML 파싱 에러:', parserError.textContent)
      throw new Error('XML 파싱 실패')
    }

    const posts = extractPostsFromRSS(xmlDoc)
    
    console.log('티스토리 포스트 로드 완료:', posts.length, '개')
    return posts
  } catch (error) {
    console.error('티스토리 RSS 피드 직접 요청 실패:', error)
    console.error('에러 상세:', {
      message: error.message,
      code: error.code,
      response: error.response?.status,
      isCORS: error.message?.includes('CORS') || error.code === 'ERR_NETWORK'
    })
    
    // CORS 에러인 경우 프록시를 통해 재시도
    try {
      console.log('프록시를 통한 요청 시도:', `/api/tistory/rss`)
      
      // Vite 프록시를 통한 요청
      const proxyResponse = await axios.get(`/api/tistory/rss`, {
        headers: {
          'Accept': 'application/xml, text/xml'
        }
      })
      
      console.log('프록시 응답 받음, 데이터 타입:', typeof proxyResponse.data)
      
      const xmlDoc = parseXML(proxyResponse.data)
      
      // 파싱 에러 확인
      const parserError = xmlDoc.querySelector('parsererror')
      if (parserError) {
        console.error('프록시 XML 파싱 에러:', parserError.textContent)
        throw new Error('프록시 XML 파싱 실패')
      }
      
      const posts = extractPostsFromRSS(xmlDoc)
      
      console.log('티스토리 포스트 로드 완료 (프록시):', posts.length, '개')
      return posts
    } catch (proxyError) {
      console.error('프록시를 통한 요청도 실패:', proxyError)
      console.error('프록시 에러 상세:', {
        message: proxyError.message,
        code: proxyError.code,
        response: proxyError.response?.status
      })
      return []
    }
  }
}

// 티스토리 블로그 URL 반환
export const getTistoryBlogUrl = () => {
  return `https://${TISTORY_BLOG_ID}.tistory.com`
}
