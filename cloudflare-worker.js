/**
 * Cloudflare Worker - GitHub API Proxy
 * 
 * 이 Worker는 GitHub API를 프록시하여 CORS 문제를 해결합니다.
 * 
 * 배포 방법:
 * 1. Cloudflare Dashboard (https://dash.cloudflare.com/) 접속
 * 2. Workers & Pages > Create application > Create Worker
 * 3. 이 코드를 복사하여 붙여넣기
 * 4. Deploy 클릭
 * 5. Routes에서 /api/github/* 경로를 설정
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    
    // CORS 헤더 설정
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }

    // OPTIONS 요청 처리 (CORS preflight)
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders,
      })
    }

    // GitHub API 경로 추출
    const path = url.pathname.replace('/api/github', '')
    const githubApiUrl = `https://api.github.com${path}${url.search}`

    try {
      // GitHub API 호출
      const response = await fetch(githubApiUrl, {
        method: request.method,
        headers: {
          'User-Agent': 'Rila-Portfolio',
          'Accept': 'application/vnd.github.v3+json',
          // GitHub Personal Access Token이 필요한 경우 (선택사항)
          // 'Authorization': `token ${env.GITHUB_TOKEN}`,
        },
      })

      const data = await response.json()

      // 응답 반환 (CORS 헤더 포함)
      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'GitHub API 호출 실패', message: error.message }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      )
    }
  },
}

