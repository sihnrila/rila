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
  'Seoul-private': 'https://seoul-private.pages.dev',

  sns: 'https://sns-edy.pages.dev',
  'detailpage-editor': 'https://detailpage-editor.pages.dev',

  'wedding-editor': 'https://wedding-editor.pages.dev/start',

  'monaco-editor': 'https://monaco-editor-aqn.pages.dev',
  'viewer': 'https://viewer-9h6.pages.dev',

  together: 'https://rila-5dl.pages.dev/demos/together.html',
  'Crossword-puzzle': 'https://crosswordpuzzle.pages.dev',
  'couple-maplibre-openfreemap': 'https://couple-maplibre-openfreemap.pages.dev',

  // GitHub Pages (User Pages 서브경로)
  snudog: 'https://sihnrila.github.io/snudog/',
  SoneFe: 'https://rila-5dl.pages.dev/demos/SoneFe.html',
  'jigoorang-adim': 'https://sihnrila.github.io/jigoorang-adim/',
  PickUpDemo: 'https://sihnrila.github.io/PickUpDemo/',

}

export const HIDDEN_REPOS = new Set(['PickUpDemo'])

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

  return ''
}

// 정적 스크린샷 이미지 (외부 API 불필요)
export const REPO_STATIC_SCREENSHOTS = {
  'sns': new URL('../assets/img/demos/sns.png', import.meta.url).href,
  'detailpage-editor': new URL('../assets/img/demos/detailpage-editor.png', import.meta.url).href,
  'monaco-editor': new URL('../assets/img/demos/monaco-editor.png', import.meta.url).href,
  'together': new URL('../assets/img/demos/together.png', import.meta.url).href,
  'Crossword-puzzle': new URL('../assets/img/demos/Crossword-puzzle.png', import.meta.url).href,
  'viewer': new URL('../assets/img/demos/viewer.png', import.meta.url).href,
  'wedding-editor': new URL('../assets/img/demos/wedding-editor.png', import.meta.url).href,
  'couple-maplibre-openfreemap': new URL('../assets/img/demos/couple-maplibre-openfreemap.png', import.meta.url).href,
  'snudog': new URL('../assets/img/demos/snudog.png', import.meta.url).href,
  'SoneFe': new URL('../assets/img/demos/SoneFe.png', import.meta.url).href,
  'jigoorang-adim': new URL('../assets/img/demos/jigoorang-adim.png', import.meta.url).href,
  'PickUpDemo': new URL('../assets/img/demos/PickUpDemo.png', import.meta.url).href,
  'Seoul-private': new URL('../assets/img/demos/Seoul-private.png', import.meta.url).href,
  'kyobo-web-viewer': new URL('../assets/img/demos/kyobo-web-viewer.png', import.meta.url).href + '?v=3',
  'aladin-web-viewer': new URL('../assets/img/demos/aladin-web-viewer.png', import.meta.url).href + '?v=4',
  'topik-landing': new URL('../assets/img/demos/topik-landing.png', import.meta.url).href,
  'topik-cms': new URL('../assets/img/demos/topik-cms.png', import.meta.url).href,
}

// 스크린샷을 표시할 레포 (확인된 라이브 URL만)
export const SCREENSHOT_REPOS = new Set([
  'sns',
  'detailpage-editor',
  'wedding-editor',
  'monaco-editor',
  'viewer',
  'together',
  'Crossword-puzzle',
  'couple-maplibre-openfreemap',
  'snudog',
  'SoneFe',
  'jigoorang-adim',
  'PickUpDemo',
  'Seoul-private',
  'kyobo-web-viewer',
  'aladin-web-viewer',
  'topik-landing',
  'topik-cms',
])

// Private 또는 수동으로 추가할 레포 카드 목록
export const MANUAL_REPOS = [
  {
    id: 'manual-kyobo-web-viewer',
    name: 'kyobo-web-viewer',
    description: '교보문고 DRM PDF/EPUB/만화 웹뷰어 (Node.js · PDF.js · Socket.IO)',
    url: '',
    homepage: '',
    fork: false,
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    updated: new Date().toISOString(),
    topics: ['nodejs', 'pdf-viewer', 'drm', 'epub'],
    hasRealDemo: true,
    isPrivate: true,
  },
  {
    id: 'manual-aladin-web-viewer',
    name: 'aladin-web-viewer',
    description: '알라딘 EPUB/PDF/오디오북/만화 웹뷰어 (Node.js · EPUB · TTS)',
    url: '',
    homepage: '',
    fork: false,
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    updated: new Date().toISOString(),
    topics: ['nodejs', 'epub-viewer', 'drm', 'tts'],
    hasRealDemo: true,
    isPrivate: true,
  },
  {
    id: 'manual-video_dl',
    name: 'video_dl',
    description: '유튜브 영상 다운로더',
    url: 'https://github.com/sihnrila/video_dl',
    homepage: '',
    fork: false,
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    updated: new Date().toISOString(),
    topics: [],
    hasRealDemo: false,
  },
  {
    id: 'manual-Seoul-private',
    name: 'Seoul-private',
    description: '서울시 AR 뷰어 (3D/AR WebGL)',
    url: 'https://github.com/sihnrila/Seoul-private',
    homepage: 'https://seoul-private.pages.dev',
    fork: false,
    language: 'HTML',
    stars: 0,
    forks: 0,
    updated: new Date().toISOString(),
    topics: [],
    hasRealDemo: true,
  },
  {
    id: 'manual-topik-landing',
    name: 'topik-landing',
    description: 'My Little Korea 한국어 학습 보드게임 랜딩페이지 (Next.js)',
    url: '',
    homepage: '',
    fork: false,
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    updated: new Date().toISOString(),
    topics: ['nextjs', 'landing-page', 'korean'],
    hasRealDemo: true,
    isPrivate: true,
  },
  {
    id: 'manual-topik-cms',
    name: 'topik-cms',
    description: 'TOPIKPLAY 콘텐츠 관리 시스템 (React · Node.js)',
    url: '',
    homepage: '',
    fork: false,
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    updated: new Date().toISOString(),
    topics: ['react', 'cms', 'dashboard'],
    hasRealDemo: true,
    isPrivate: true,
  },
  {
    id: 'manual-viewer',
    name: 'viewer',
    description: 'EPUB 뷰어',
    url: 'https://github.com/sihnrila/viewer',
    homepage: 'https://viewer-9h6.pages.dev',
    fork: false,
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    updated: new Date().toISOString(),
    topics: [],
    hasRealDemo: true,
  },
]

const STATIC_FALLBACK_REPOS = [
  { name: 'viewer',                    language: 'JavaScript', description: 'EPUB 웹뷰어' },
  { name: 'monaco-editor',             language: 'JavaScript', description: '' },
  { name: 'SoneFe',                    language: 'JavaScript', description: '' },
  { name: 'jigoorang-adim',            language: 'HTML',       description: '' },
  { name: 'together',                  language: 'Vue',        description: '' },
  { name: 'sns',                       language: 'JavaScript', description: '' },
  { name: 'wedding-editor',            language: 'JavaScript', description: '' },
  { name: 'snudog',                    language: 'CSS',        description: '' },
  { name: 'detailpage-editor',         language: 'TypeScript', description: '스마트스토어 상세페이지 자동 생성 에디터 (Vite + React + TypeScript)' },
  { name: 'Crossword-puzzle',          language: 'JavaScript', description: '' },
  { name: 'couple-maplibre-openfreemap', language: 'TypeScript', description: '' },
  { name: 'PickUpDemo',                language: 'HTML',       description: '' },
  { name: 'Seoul-private',             language: 'HTML',       description: '서울시 AR 뷰어 (3D/AR WebGL)' },
  { name: 'video_dl',                  language: 'JavaScript', description: '유튜브 영상 다운로더' },
  { name: 'rila',                      language: 'JavaScript', description: '' },
].map(r => ({
  id: r.name,
  name: r.name,
  description: r.description,
  url: `https://github.com/sihnrila/${r.name}`,
  homepage: resolveRepoDemoUrl(r.name, ''),
  fork: false,
  language: r.language,
  stars: 0,
  forks: 0,
  updated: new Date().toISOString(),
  topics: [],
  hasRealDemo: SCREENSHOT_REPOS.has(r.name),
}))

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
    hasRealDemo: SCREENSHOT_REPOS.has(repo.name),
  }))
}

export const PROFESSIONAL_REPOS = new Set([
  'viewer',
  'monaco-editor',
  'jigoorang-adim',
  'snudog',
  'SoneFe',
  'together',
  'Seoul-private',
  'kyobo-web-viewer',
  'aladin-web-viewer',
  'topik-landing',
  'topik-cms',
  '3D-AR-Viewer',
])

const REPO_ORDER = [
  'viewer',
  'monaco-editor',
  'kyobo-web-viewer',
  'aladin-web-viewer',
  'topik-landing',
  'topik-cms',
  '3D-AR-Viewer',
  'SoneFe',
  'jigoorang-adim',
  'together',
  'sns',
  'wedding-editor',
  'snudog',
]

const CACHE_KEY = 'github_repos_cache_v4'
const CACHE_TTL = 60 * 60 * 1000 // 1시간

const sortRepos = (all) => {
  all.sort((a, b) => {
    const ai = REPO_ORDER.indexOf(a.name)
    const bi = REPO_ORDER.indexOf(b.name)
    if (ai !== -1 && bi !== -1) return ai - bi
    if (ai !== -1) return -1
    if (bi !== -1) return 1
    return 0
  })
  return all
}

export const fetchGitHubRepos = async () => {
  // 캐시 확인
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null')
    if (cached && Date.now() - cached.ts < CACHE_TTL) {
      return sortRepos(cached.data)
    }
  } catch {}

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
      const apiNames = new Set(transformed.map(r => r.name))
      const extras = MANUAL_REPOS.filter(r => !apiNames.has(r.name))
      const all = sortRepos([...transformed, ...extras])
      try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: all })) } catch {}
      return all
    }
    console.warn('GitHub API 응답 형식이 예상과 다릅니다:', response.data)
    return []
  } catch (error) {
    console.error('GitHub API 호출 실패:', error)
    // 캐시 → 정적 fallback 순으로 반환
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null')
      if (cached) return sortRepos(cached.data)
    } catch {}
    const fallbackNames = new Set(STATIC_FALLBACK_REPOS.map(r => r.name))
    const manualExtras = MANUAL_REPOS.filter(r => !fallbackNames.has(r.name))
    return sortRepos([...STATIC_FALLBACK_REPOS, ...manualExtras])
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
