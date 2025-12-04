import axios from 'axios'

const GITHUB_USERNAME = 'sihnrila'
const GITHUB_API_BASE = 'https://api.github.com'

// 데이터 변환 함수
const transformRepos = (data) => {
  // 배열인지 확인
  if (!Array.isArray(data)) {
    console.error('GitHub API 응답이 배열이 아닙니다:', data)
    return []
  }
  
  return data.map(repo => ({
    id: repo.id,
    name: repo.name,
    description: repo.description || '',
    url: repo.html_url,
    homepage: repo.homepage, // GitHub에 설정된 homepage만 사용
    language: repo.language || 'Other',
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updated: repo.updated_at,
    topics: repo.topics || []
  }))
}

export const fetchGitHubRepos = async () => {
  try {
    // GitHub API 직접 호출 (CORS 허용됨)
    const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`, {
      params: {
        sort: 'updated',
        per_page: 100,
        type: 'public' // public 레포지토리만 가져오기
      },
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    
    // 응답 데이터 확인
    if (response.data && Array.isArray(response.data)) {
      // 각 레포지토리에 Cloudflare Pages URL 추가
      const reposWithCloudflarePages = response.data.map((repo) => {
        // GitHub 레포지토리의 homepage 필드가 없으면 Cloudflare Pages URL 생성
        if (!repo.homepage) {
          // Cloudflare Pages URL 패턴: https://{레포이름}.pages.dev
          repo.homepage = `https://${repo.name}.pages.dev`
        }
        return repo
      })
      
      const transformed = transformRepos(reposWithCloudflarePages)
      console.log('GitHub API 응답:', reposWithCloudflarePages.length, '개 레포지토리')
      console.log('레포지토리 이름 목록:', transformed.map(r => r.name))
      console.log('homepage가 있는 레포:', transformed.filter(r => r.homepage).map(r => `${r.name}: ${r.homepage}`))
      return transformed
    } else {
      console.warn('GitHub API 응답 형식이 예상과 다릅니다:', response.data)
      return []
    }
  } catch (error) {
    console.error('GitHub API 호출 실패:', error)
    // 에러 상세 정보 로깅
    if (error.response) {
      console.error('응답 상태:', error.response.status)
      console.error('응답 데이터:', error.response.data)
    } else if (error.request) {
      console.error('요청이 전송되었지만 응답을 받지 못했습니다:', error.request)
    } else {
      console.error('요청 설정 중 오류 발생:', error.message)
    }
    return []
  }
}

export const getLanguageColor = (language) => {
  const colors = {
    'HTML': '#F65314',
    'CSS': '#1572B6',
    'JavaScript': '#FFBA00',
    'TypeScript': '#3178C6',
    'Vue': '#42b983',
    'React': '#61DAFB',
    'Python': '#3776AB',
    'SCSS': '#ffbbf0',
    'Other': '#707070'
  }
  return colors[language] || colors['Other']
}

