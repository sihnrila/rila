/**
 * Cloudflare Pages Function — Tistory RSS 프록시
 * 정적 호스팅만 있을 때 /api/* 가 index.html로 떨어져 블로그가 비는 문제를 해결합니다.
 * @see https://developers.cloudflare.com/pages/functions/
 */

const TISTORY_BLOG_ID = 'rilaa'

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Accept, Content-Type',
}

export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors })
  }

  if (context.request.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405, headers: cors })
  }

  const rssUrl = `https://${TISTORY_BLOG_ID}.tistory.com/rss`

  try {
    const res = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Rila-Portfolio/1.0',
        Accept: 'application/rss+xml, application/xml, text/xml, */*',
      },
    })

    const text = await res.text()

    return new Response(text, {
      status: res.status,
      headers: {
        ...cors,
        'Content-Type':
          res.headers.get('content-type') || 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
      },
    })
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'RSS fetch failed', message: err.message }),
      {
        status: 502,
        headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' },
      }
    )
  }
}
