# rila — 포트폴리오 사이트 CLAUDE.md

## 프로젝트 개요

개인 포트폴리오 사이트. React 18 + Vite + SCSS 스택.  
배포: Cloudflare Pages (`rila-5dl.pages.dev`)

## 디렉토리 구조

```
src/
  components/
    Home.jsx          # 메인 페이지 (Hero, About, Work 카드 그리드)
    RepoDetail.jsx    # 프로젝트 상세 페이지 (/repos/:repoName)
  data/
    projects.js       # PROJECT_META — 프로젝트 메타데이터 단일 소스
  services/
    github.js         # GitHub API fetch + 정적 fallback + REPO_STATIC_SCREENSHOTS
  assets/
    img/demos/        # 프로젝트 스크린샷 (.png)
    scss/style.scss   # 전체 스타일
public/
  demos/              # 라이브 데모 HTML (SoneFe.html, together.html 등)
  img/demos/          # src/assets/img/demos/ 미러 (Cloudflare Pages 정적 접근용)
```

## 핵심 데이터 파일

### `src/data/projects.js` — PROJECT_META

모든 프로젝트 상세 정보의 단일 소스. RepoDetail.jsx는 GitHub API를 쓰지 않고 이 파일만 참조한다.

스키마:
```js
{
  title: '표시 제목',
  period: '2023.01 — 2024.06',
  role: '프론트엔드 개발자',
  projectFamily: '상위 프로젝트명 (있을 때만)',  // 예: 'TOPIK PLAY'
  summary: '한두 문장 개요 (카드 + 상세 둘 다 사용)',
  responsibilities: ['담당 업무 항목'],
  challenges: [{
    problem: '문제 설명',
    cause: '원인',         // null → 렌더링 안 함
    solution: '해결 방법',
    result: '결과',        // null → 렌더링 안 함
  }],
  techStack: ['기술', '스택'],
  tags: ['태그'],
  screenshotAlt: '이미지 alt 텍스트',
  screenshotCaption: '캡션',
  githubUrl: 'https://github.com/...',   // 없으면 빈 문자열
  demoUrl: 'https://...',                 // 없으면 빈 문자열
  hasRealDemo: true/false,
  needsReview: false,
}
```

`challenges`에서 `problem`이 없는 항목은 렌더링하지 않는다 (`hasChallenge` 조건).

### `src/services/github.js`

- `REPO_STATIC_SCREENSHOTS` — 레포명 → 이미지 URL 매핑
- `SCREENSHOT_REPOS` — 스크린샷 있는 레포 Set
- `PROFESSIONAL_REPOS` — 경력/전문 프로젝트 Set (카드 필터링용)
- `REPO_ORDER` — 카드 표시 순서
- `REPO_DEMO_URL_OVERRIDES` — 레포 → 데모 URL (GitHub homepage 없을 때)
- `MANUAL_REPOS` — Private 레포 등 API에 안 잡히는 수동 추가 목록
- `resolveRepoDemoUrl` — 데모 URL 결정 로직: GitHub homepage → override → '' (pages.dev 자동추정 제거됨)
- `CACHE_KEY = 'github_repos_cache_v4'` — localStorage 캐시 키

## 등록된 프로젝트 (REPO_ORDER 순)

| 레포명 | 분류 | 스크린샷 | 데모 |
|---|---|---|---|
| viewer | 경력 | ✅ | viewer-9h6.pages.dev |
| monaco-editor | 경력 | ✅ | monaco-editor-aqn.pages.dev |
| kyobo-web-viewer | 경력 (Private) | ✅ | — |
| aladin-web-viewer | 경력 (Private) | ✅ | — |
| topik-landing | 경력 (Private) | ✅ | — |
| topik-cms | 경력 (Private) | ✅ | — |
| 3D-AR-Viewer | 경력 | ✅ | — |
| SoneFe | 경력 | ✅ | rila-5dl.pages.dev/demos/SoneFe.html |
| jigoorang-adim | 경력 | ✅ | sihnrila.github.io/jigoorang-adim |
| together | 개인 | ✅ | rila-5dl.pages.dev/demos/together.html |
| sns | 개인 | ✅ | sns-edy.pages.dev |
| wedding-editor | 개인 | ✅ | wedding-editor.pages.dev/start |
| snudog | 개인 | ✅ | sihnrila.github.io/snudog |

## 스크린샷 추가 절차

1. `src/assets/img/demos/<레포명>.png` 저장
2. `public/img/demos/<레포명>.png` 동일 파일 복사
3. `REPO_STATIC_SCREENSHOTS`에 항목 추가
4. `SCREENSHOT_REPOS` Set에 레포명 추가

## 데모 HTML 파일

`public/demos/`에 정적 HTML로 배포:
- `SoneFe.html` — 구역 배치 에디터 (fabric.js canvas + vis-timeline), 라이트 UI
- `together.html` — 커뮤니티 앱 데모 (Leaflet 지도, 서울 마포구)
- `together.html`은 원본 앱의 UI 구조(`#view-map`, `.tap_bar`, `switchTab(name)`)를 유지

## RepoDetail.jsx 동작

- GitHub API, README, iframe 사용 안 함
- `PROJECT_META[repoName]`에서 모든 정보 가져옴
- `meta`가 없으면 "프로젝트 정보를 찾을 수 없습니다" 표시
- 뒤로 가기: `window.history.length > 1` → `navigate(-1)`, 아니면 `/#work`로 이동
- `challenges.problem`이 null이면 "기술적 도전" 섹션 숨김

## 주의 사항

- `resolveRepoDemoUrl`에서 `*.pages.dev` 자동추정 제거됨 — 없으면 반드시 override에 추가
- Private 레포(kyobo, aladin, topik-*)는 `MANUAL_REPOS`에 수동 등록
- `github_repos_cache_v4` 캐시가 남아 있으면 카드 순서 변경이 안 보임 → localStorage 지우기
- 스크린샷 파일 추가 후 `src/assets/img/demos/`와 `public/img/demos/` 양쪽 모두 업데이트
