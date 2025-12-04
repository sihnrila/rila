# Cloudflare Workers 설정 가이드

## 1. Cloudflare Dashboard 접속

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)에 로그인
2. 왼쪽 메뉴에서 **Workers & Pages** 클릭

## 2. Worker 생성

1. **Create application** 버튼 클릭
2. **Create Worker** 선택
3. Worker 이름 입력: `rila-github-api-proxy` (또는 원하는 이름)
4. **Deploy** 클릭

## 3. Worker 코드 배포

1. 생성된 Worker를 클릭하여 편집 페이지로 이동
2. `cloudflare-worker.js` 파일의 내용을 복사
3. Worker 편집기에 붙여넣기
4. **Save and deploy** 클릭

## 4. Routes 설정 (도메인이 있는 경우)

도메인이 Cloudflare에 연결되어 있다면:

1. Worker 페이지에서 **Triggers** 탭 클릭
2. **Routes** 섹션에서 **Add route** 클릭
3. 다음 정보 입력:
   - **Route**: `your-domain.com/api/github/*`
   - **Zone**: 도메인 선택
4. **Save** 클릭

## 5. Custom Domain 설정 (선택사항)

Worker에 커스텀 도메인을 연결하려면:

1. Worker 페이지에서 **Settings** 탭 클릭
2. **Triggers** 섹션에서 **Add Custom Domain** 클릭
3. 도메인 입력 (예: `api.your-domain.com`)
4. **Add Custom Domain** 클릭

## 6. 환경 변수 설정 (선택사항)

GitHub API Rate Limit을 늘리려면 Personal Access Token 사용:

### GitHub Token 생성

1. GitHub에 로그인
2. Settings > Developer settings > Personal access tokens > Tokens (classic)
3. **Generate new token (classic)** 클릭
4. Note: `Rila Portfolio API`
5. Scopes: `public_repo` 체크
6. **Generate token** 클릭
7. 생성된 토큰을 복사 (한 번만 표시됨!)

### Cloudflare에 Token 추가

1. Worker 페이지에서 **Settings** 탭 클릭
2. **Variables** 섹션으로 스크롤
3. **Add variable** 클릭
4. Variable name: `GITHUB_TOKEN`
5. Value: 복사한 GitHub 토큰
6. **Save** 클릭

### Worker 코드에서 Token 사용

`cloudflare-worker.js` 파일에서 주석 처리된 부분을 활성화:

```javascript
headers: {
  'User-Agent': 'Rila-Portfolio',
  'Accept': 'application/vnd.github.v3+json',
  'Authorization': `token ${env.GITHUB_TOKEN}`, // 이 줄 활성화
},
```

## 7. 테스트

Worker가 제대로 작동하는지 테스트:

```bash
curl https://your-worker-name.your-subdomain.workers.dev/api/github/users/sihnrila/repos
```

또는 브라우저에서 직접 접근해보세요.

## 8. 프론트엔드에서 사용

프로덕션 환경에서는 Worker URL을 사용하도록 `src/services/github.js`를 수정:

```javascript
const CLOUDFLARE_WORKER_URL = 'https://your-worker-name.your-subdomain.workers.dev/api/github'
```

또는 커스텀 도메인을 사용:

```javascript
const CLOUDFLARE_WORKER_URL = 'https://api.your-domain.com/api/github'
```

## 문제 해결

### CORS 오류
- Worker의 CORS 헤더가 제대로 설정되어 있는지 확인
- `Access-Control-Allow-Origin`이 `*` 또는 프론트엔드 도메인으로 설정되어 있는지 확인

### 401 Unauthorized
- GitHub Token이 올바르게 설정되어 있는지 확인
- Token에 필요한 권한이 있는지 확인

### Rate Limit
- GitHub API는 시간당 60회 요청 제한이 있습니다
- Personal Access Token을 사용하면 시간당 5,000회로 증가합니다

