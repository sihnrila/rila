import axios from 'axios'

const GITHUB_USERNAME = 'sihnrila'
const GITHUB_API_BASE = 'https://api.github.com'

// Cloudflare Worker를 통한 GitHub API 호출 (CORS 우회)
const CLOUDFLARE_WORKER_URL = '/api/github' // Cloudflare Worker 엔드포인트

export const fetchGitHubRepos = async () => {
  try {
    // Cloudflare Worker를 통해 GitHub API 호출
    const response = await axios.get(`${CLOUDFLARE_WORKER_URL}/users/${GITHUB_USERNAME}/repos`, {
      params: {
        sort: 'updated',
        per_page: 100,
        type: 'all'
      }
    })
    
    return response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || '',
      url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language || 'Other',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updated: repo.updated_at,
      topics: repo.topics || []
    }))
  } catch (error) {
    console.error('GitHub API 호출 실패:', error)
    // Fallback: 직접 GitHub API 호출 시도 (CORS 문제 가능)
    try {
      const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`, {
        params: {
          sort: 'updated',
          per_page: 100,
          type: 'all'
        }
      })
      
      return response.data.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || '',
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language || 'Other',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updated: repo.updated_at,
        topics: repo.topics || []
      }))
    } catch (fallbackError) {
      console.error('Fallback GitHub API 호출도 실패:', fallbackError)
      return []
    }
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

