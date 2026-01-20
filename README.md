# Rila Portfolio - React Version

신리라의 포트폴리오 웹사이트 (React + Vite)

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## 📦 주요 기능

- ✅ React + Vite 기반
- ✅ **최신 트렌드 UI/UX**: Black & White 타이포그래피 중심 디자인
- ✅ **인터랙티브 마이크로 애니메이션**: 스크롤 및 호버 효과
- ✅ GitHub API를 통한 프로젝트 동적 로드
- ✅ **Tistory 블로그 연동**: RSS 피드를 통한 최신 포스트 표시
- ✅ **Skills 슬라이더**: 자동 슬라이드 및 수동 네비게이션
- ✅ **프로젝트 상세 페이지**: 개별 프로젝트 상세 정보
- ✅ **Resume 페이지**: 경력, 프로젝트, 스킬 상세 정보
- ✅ 반응형 디자인 (모바일 최적화)
- ✅ AOS (Animate On Scroll) 애니메이션

## 🎨 디자인 특징

- **Black & White 컬러 스킴**: 모던하고 미니멀한 디자인
- **타이포그래피 중심**: 큰 폰트와 명확한 계층 구조
- **인터랙티브 요소**: 
  - Hero 섹션의 그라데이션 텍스트 애니메이션
  - Skills 섹션의 자동 슬라이드 및 네비게이션
  - 카드 호버 효과 및 마이크로 인터랙션
- **Glassmorphism 효과**: 투명도와 블러 효과 활용
- **반응형 레이아웃**: 모바일, 태블릿, 데스크톱 최적화

## 📁 프로젝트 구조

```
rila/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # 네비게이션 바
│   │   ├── Home.jsx            # 메인 페이지 (Hero, About, Skills, Work, Blog, Contact)
│   │   ├── ProjectDetail.jsx   # 디자인 프로젝트 상세 페이지
│   │   ├── RepoDetail.jsx       # GitHub 프로젝트 상세 페이지
│   │   └── Resume.jsx          # 이력서 페이지
│   ├── services/
│   │   ├── github.js           # GitHub API 서비스
│   │   └── tistory.js          # Tistory RSS 피드 서비스
│   ├── assets/
│   │   ├── img/                # 이미지 파일
│   │   └── scss/               # 스타일 파일
│   │       ├── reset.scss      # CSS 리셋
│   │       └── style.scss      # 메인 스타일
│   ├── router/
│   │   └── index.js            # React Router 설정
│   ├── App.jsx                 # 메인 앱 컴포넌트
│   └── main.jsx                # 엔트리 포인트
├── public/
│   ├── img/                    # 정적 이미지 파일
│   ├── favicon.svg             # 파비콘
│   └── _redirects              # Cloudflare Pages 리다이렉트 설정
├── cloudflare-worker.js        # Cloudflare Worker 코드
├── wrangler.toml               # Cloudflare Worker 설정
├── vite.config.js              # Vite 설정 (프록시 포함)
└── package.json
```

## 🔧 주요 섹션

### Hero Section
- 대형 타이포그래피
- 그라데이션 텍스트 애니메이션
- 스크롤 인디케이터

### About Me Section
- 2컬럼 레이아웃 (텍스트 + 이미지)
- 프로필 이미지 및 Resume 버튼
- 경력 및 소개 정보

### Skills Section
- 자동 슬라이드 애니메이션
- 좌우 네비게이션 버튼
- 드래그 스크롤 지원
- 20개 이상의 기술 스택 표시

### Work Section
- 탭 기반 네비게이션 (Design / Frontend)
- 프로젝트 카드 그리드
- 개별 프로젝트 상세 페이지 링크

### Blog Section
- Tistory RSS 피드 연동
- 최신 포스트 자동 표시
- 썸네일 이미지 (있는 경우)

### Contact Section
- 소셜 링크 및 연락처 정보

## 🔗 외부 연동

### GitHub API
GitHub API를 통해 `sihnrila` 사용자의 모든 저장소를 자동으로 가져옵니다.
프로젝트는 다음 정보를 표시합니다:
- 저장소 이름
- 설명
- 사용 언어
- 스타 수
- 포크 수
- 홈페이지 링크 (있는 경우)

### Tistory RSS
Tistory 블로그 (`rilaa.tistory.com`)의 RSS 피드를 통해 최신 포스트를 가져옵니다.
- CORS 이슈 해결을 위한 Vite 프록시 설정
- HTML 엔티티 디코딩
- 썸네일 이미지 추출

## 🚀 배포

### Cloudflare Pages

1. GitHub 저장소와 Cloudflare Pages 연결
2. 빌드 설정:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. 환경 변수 설정 (필요한 경우)

### 수동 배포

```bash
# 빌드
npm run build

# Cloudflare Pages에 배포
npx wrangler pages deploy dist --project-name=rila
```

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 용도로 사용됩니다.

## 👤 작성자

**신리라 (Rila Shin)**
- GitHub: [@sihnrila](https://github.com/sihnrila)
- Blog: [rilaa.tistory.com](https://rilaa.tistory.com)
- Email: oo8923@gmail.com
