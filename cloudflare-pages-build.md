# Cloudflare Pages 빌드 설정 가이드

## 필수 설정

Cloudflare Pages 대시보드에서 다음 설정을 확인하세요:

### Build Settings
- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (비워두거나 `/`)

### Environment Variables
- **NODE_VERSION**: `18` (선택사항, 기본값 사용 가능)

## 빌드 프로세스

1. `npm install` - 의존성 설치
2. `npm run copy-images` - 이미지 파일 복사 (prebuild에서 자동 실행)
3. `npm run build` - Vite 빌드 실행
4. `dist` 폴더가 생성됨

## 배포 확인

배포 후 다음을 확인하세요:
- `https://rila-5dl.pages.dev/` 접속
- 브라우저 개발자 도구(F12) → Console에서 오류 확인
- Network 탭에서 파일 로드 확인

## 문제 해결

### MIME 타입 오류가 발생하는 경우:
1. Cloudflare Pages에서 "Retry deployment" 클릭
2. 빌드 로그 확인
3. `dist` 폴더가 제대로 생성되었는지 확인

### 이미지가 로드되지 않는 경우:
- `public/img` 폴더에 이미지가 있는지 확인
- 빌드 전에 `npm run copy-images` 실행되었는지 확인

