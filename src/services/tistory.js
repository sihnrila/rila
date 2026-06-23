import axios from 'axios'

// 티스토리 블로그 ID (사용자가 변경해야 함)
const TISTORY_BLOG_ID = 'rilaa' // 여기에 티스토리 블로그 ID 입력

// RSS 피드 URL
const TISTORY_RSS_URL = `https://${TISTORY_BLOG_ID}.tistory.com/rss`

// Cloudflare Worker API Proxy URL
const WORKER_PROXY_BASE = 'https://rila-github-api-proxy.sihnrila.workers.dev'

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
  console.log('티스토리 RSS 피드 가져오기 시작...');
  
  // 1. 1차 로컬 프록시 또는 Pages Function 시도 (CORS 방지 및 로딩 속도 최적화)
  try {
    const proxyUrl = '/api/tistory/rss'
    console.log('1차 프록시 요청 시도:', proxyUrl)
    const proxyResponse = await axios.get(proxyUrl, {
      headers: {
        'Accept': 'application/xml, text/xml'
      },
      timeout: 10000
    })
    
    console.log('1차 프록시 응답 받음, 데이터 타입:', typeof proxyResponse.data)
    const xmlDoc = parseXML(proxyResponse.data)
    
    const parserError = xmlDoc.querySelector('parsererror')
    if (parserError) {
      console.error('1차 프록시 XML 파싱 에러:', parserError.textContent)
      throw new Error('1차 프록시 XML 파싱 실패')
    }
    
    const posts = extractPostsFromRSS(xmlDoc)
    console.log('티스토리 포스트 로드 완료 (1차 프록시):', posts.length, '개')
    return posts
  } catch (proxyError) {
    console.warn('1차 프록시 요청 실패, 2차 Cloudflare Worker 프록시 시도:', proxyError.message)
    
    // 2. 2차 Cloudflare Worker 프록시 시도
    try {
      const workerProxyUrl = `${WORKER_PROXY_BASE}/api/tistory/rss?url=${encodeURIComponent(TISTORY_RSS_URL)}`
      console.log('2차 프록시 요청 시도 (Worker):', workerProxyUrl)
      const workerResponse = await axios.get(workerProxyUrl, {
        headers: {
          'Accept': 'application/xml, text/xml'
        },
        timeout: 10000
      })
      
      console.log('2차 프록시 응답 받음, 데이터 타입:', typeof workerResponse.data)
      const xmlDoc = parseXML(workerResponse.data)
      
      const parserError = xmlDoc.querySelector('parsererror')
      if (parserError) {
        console.error('2차 프록시 XML 파싱 에러:', parserError.textContent)
        throw new Error('2차 프록시 XML 파싱 실패')
      }
      
      const posts = extractPostsFromRSS(xmlDoc)
      console.log('티스토리 포스트 로드 완료 (2차 프록시):', posts.length, '개')
      return posts
    } catch (workerError) {
      console.warn('2차 프록시(Worker) 요청 실패, 다이렉트 RSS 호출(CORS 위험 있음) 시도:', workerError.message)
      
      // 3. 3차 직접 RSS 요청 시도 (CORS 위험 있음)
      try {
        console.log('다이렉트 RSS 피드 가져오기 시도:', TISTORY_RSS_URL)
        const response = await axios.get(TISTORY_RSS_URL, {
          headers: {
            'Accept': 'application/rss+xml, application/xml, text/xml'
          },
          timeout: 5000
        })

        console.log('RSS 피드 응답 받음, 데이터 타입:', typeof response.data)
        const xmlDoc = parseXML(response.data)
        
        const parserError = xmlDoc.querySelector('parsererror')
        if (parserError) {
          console.error('다이렉트 XML 파싱 에러:', parserError.textContent)
          throw new Error('XML 파싱 실패')
        }

        const posts = extractPostsFromRSS(xmlDoc)
        console.log('티스토리 포스트 로드 완료 (다이렉트):', posts.length, '개')
        return posts
      } catch (directError) {
        console.error('티스토리 RSS 모든 요청 최종 실패:', directError.message)
        return []
      }
    }
  }
}

// 티스토리 블로그 URL 반환
export const getTistoryBlogUrl = () => {
  return `https://${TISTORY_BLOG_ID}.tistory.com`
}
