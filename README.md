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
- ✅ GitHub API를 통한 프로젝트 동적 로드
- ✅ Cloudflare Workers 백엔드 연동
- ✅ 반응형 디자인
- ✅ AOS (Animate On Scroll) 애니메이션

## 🔧 Cloudflare Workers 설정

자세한 설정 가이드는 [CLOUDFLARE_SETUP.md](./CLOUDFLARE_SETUP.md)를 참고하세요.

### 빠른 시작

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) 접속
2. **Workers & Pages** > **Create application** > **Create Worker**
3. `cloudflare-worker.js` 파일 내용 복사하여 붙여넣기
4. **Deploy** 클릭

### 이미지 설정

프로젝트의 이미지 파일들을 `public/img` 폴더로 복사해야 합니다:

```bash
# src/assets/img의 모든 이미지를 public/img로 복사
cp -r src/assets/img/* public/img/
```

또는 수동으로 `src/assets/img` 폴더의 모든 이미지를 `public/img` 폴더로 복사하세요.

## 📁 프로젝트 구조

```
rila/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # 네비게이션 바
│   │   ├── Home.jsx         # 메인 페이지
│   │   └── DesignModals.jsx # 디자인 프로젝트 모달
│   ├── services/
│   │   └── github.js        # GitHub API 서비스
│   ├── assets/
│   │   ├── img/             # 이미지 파일
│   │   └── scss/            # 스타일 파일
│   ├── App.jsx              # 메인 앱 컴포넌트
│   └── main.jsx             # 엔트리 포인트
├── cloudflare-worker.js     # Cloudflare Worker 코드
├── wrangler.toml            # Cloudflare Worker 설정
├── vite.config.js           # Vite 설정
└── package.json
```

## 🔗 GitHub 프로젝트 연동

GitHub API를 통해 `sihnrila` 사용자의 모든 저장소를 자동으로 가져옵니다.
프로젝트는 다음 정보를 표시합니다:

- 저장소 이름
- 설명
- 사용 언어
- 스타 수
- 포크 수
- 홈페이지 링크 (있는 경우)

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 용도로 사용됩니다.
