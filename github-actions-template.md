# GitHub Actions 워크플로우 템플릿

각 프로젝트 레포지토리에 이 워크플로우를 추가하세요.

## 설정 방법

1. 각 레포지토리의 `.github/workflows/` 폴더에 `update-homepage.yml` 파일 생성
2. 아래 내용을 복사하여 붙여넣기

## 워크플로우 파일

`.github/workflows/update-homepage.yml`:

```yaml
name: Update Repository Homepage

on:
  push:
    branches:
      - main
      - master

jobs:
  update-homepage:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    
    steps:
      - name: Get repository name
        id: repo
        run: |
          REPO_NAME=$(echo "${{ github.repository }}" | cut -d'/' -f2)
          echo "repo_name=$REPO_NAME" >> $GITHUB_OUTPUT
          echo "homepage_url=https://${REPO_NAME}.pages.dev" >> $GITHUB_OUTPUT
      
      - name: Update repository homepage via GitHub API
        run: |
          REPO_NAME="${{ steps.repo.outputs.repo_name }}"
          HOMEPAGE_URL="${{ steps.repo.outputs.homepage_url }}"
          
          curl -X PATCH \
            -H "Accept: application/vnd.github.v3+json" \
            -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
            https://api.github.com/repos/${{ github.repository }} \
            -d "{\"homepage\":\"$HOMEPAGE_URL\"}"
```

## 주의사항

- 이 워크플로우는 각 프로젝트 레포지토리에 추가해야 합니다
- `GITHUB_TOKEN`은 자동으로 제공되므로 별도 설정이 필요 없습니다
- 레포지토리 이름이 Cloudflare Pages 프로젝트 이름과 일치해야 합니다

## Cloudflare Pages 설정

각 레포지토리마다 Cloudflare Pages 프로젝트를 생성하고:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Project name**: 레포 이름 (예: `epub-viewer-editor` → `epub-viewer-editor.pages.dev`)

## 동작 방식

1. `main` 또는 `master` 브랜치에 푸시하면 워크플로우 실행
2. 레포지토리 이름을 기반으로 `https://{레포이름}.pages.dev` URL 생성
3. GitHub API를 통해 해당 레포의 `homepage` 필드 자동 업데이트
4. 포트폴리오 사이트에서 `homepage`가 있는 레포만 "Live Demo" 버튼 표시

