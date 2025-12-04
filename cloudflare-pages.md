# Cloudflare Pages 배포 설정

## 빌드 설정

Cloudflare Pages 대시보드에서 다음 설정을 사용하세요:

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (프로젝트 루트)

## 환경 변수

필요한 경우 환경 변수를 설정할 수 있습니다:
- `NODE_VERSION`: `18` 또는 `20` (선택사항)

## 자동 배포

GitHub 저장소와 연결하면 자동으로 배포됩니다:
1. GitHub 저장소 연결
2. 빌드 설정 입력
3. 저장 및 배포

## 수동 배포

Wrangler CLI를 사용하여 수동 배포:

```bash
npm install -g wrangler
wrangler pages deploy dist --project-name=rila-portfolio
```

