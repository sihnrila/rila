import axios from 'axios'

const GITHUB_USERNAME = 'sihnrila'
const GITHUB_API_BASE = 'https://api.github.com'

/**
 * 라이브 데모 URL (레포 이름 → 배포 주소)
 * - GitHub 레포 Settings → Website가 비어 있을 때만 적용됩니다. (Website가 있으면 그 URL 우선)
 * - 배포 주소를 바꿨으면 GitHub에 넣거나, 여기 값을 수정하면 됩니다.
 */
export const REPO_DEMO_URL_OVERRIDES = {
  // 메인 포트폴리오 (Cloudflare)
  rila: 'https://rila-5dl.pages.dev',

  tem: 'https://tem.pages.dev',
  tem2: 'https://tem2.pages.dev',
  'Seoul-private': 'https://Seoul-private.pages.dev',

  sns: 'https://sns.pages.dev',
  'detailpage-editor': 'https://detailpage-editor.pages.dev',

  'wedding-editor': 'https://wedding-editor.pages.dev/start',

  'monaco-editor': 'https://monaco-editor.pages.dev',

  together: 'https://together.pages.dev',
  'Crossword-puzzle': 'https://Crossword-puzzle.pages.dev',
  'couple-maplibre-openfreemap': 'https://couple-maplibre-openfreemap.pages.dev',

  // GitHub Pages (User Pages 서브경로)
  snudog: 'https://sihnrila.github.io/snudog/',
  SoneFe: 'https://sihnrila.github.io/SoneFe/',
  'jigoorang-adim': 'https://sihnrila.github.io/jigoorang-adim/',
  PickUpDemo: 'https://sihnrila.github.io/PickUpDemo/',

  // 배포 주소 확인 후 수정 (현재는 관례상 pages.dev)
  Flieupload_FE: 'https://Flieupload_FE.pages.dev',
  JigooFe: 'https://JigooFe.pages.dev',
  'Crossword-Generator': 'https://Crossword-Generator.pages.dev',
  topichi_App: 'https://topichi_App.pages.dev',
}

/**
 * 카드·상세에서 공통으로 사용하는 라이브 데모 URL
 * 1) GitHub 레포 Website(homepage) 2) REPO_DEMO_URL_OVERRIDES 3) *.pages.dev
 */
export const resolveRepoDemoUrl = (repoName, rawHomepage = '') => {
  const h = String(rawHomepage || '').trim()
  if (h) {
    if (repoName === 'wedding-editor-scaffold' || repoName === 'wedding-editor') {
      let demo = h
      if (!demo.includes('/start')) {
        demo = demo.endsWith('/') ? `${demo}start` : `${demo}/start`
      }
      return demo
    }
    return h
  }

  if (REPO_DEMO_URL_OVERRIDES[repoName]) {
    return REPO_DEMO_URL_OVERRIDES[repoName]
  }

  return `https://${repoName}.pages.dev`
}

const transformRepos = (data) => {
  if (!Array.isArray(data)) {
    console.error('GitHub API 응답이 배열이 아닙니다:', data)
    return []
  }

  return data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description || '',
    url: repo.html_url,
    homepage: resolveRepoDemoUrl(repo.name, repo.homepage),
    fork: Boolean(repo.fork),
    language: repo.language || 'Other',
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updated: repo.updated_at,
    topics: repo.topics || [],
  }))
}

export const fetchGitHubRepos = async () => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`, {
      params: {
        sort: 'updated',
        per_page: 100,
        type: 'public',
      },
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (response.data && Array.isArray(response.data)) {
      const transformed = transformRepos(response.data)
      console.log('GitHub API 응답:', transformed.length, '개 레포지토리')
      return transformed
    }
    console.warn('GitHub API 응답 형식이 예상과 다릅니다:', response.data)
    return []
  } catch (error) {
    console.error('GitHub API 호출 실패:', error)
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
    HTML: '#F65314',
    CSS: '#1572B6',
    JavaScript: '#FFBA00',
    TypeScript: '#3178C6',
    Vue: '#42b983',
    React: '#61DAFB',
    Python: '#3776AB',
    SCSS: '#ffbbf0',
    Other: '#707070',
  }
  return colors[language] || colors['Other']
}
