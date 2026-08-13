import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/scss/reset.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/github': {
        target: 'https://api.github.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/github/, ''),
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            proxyReq.setHeader('User-Agent', 'Rila-Portfolio')
            proxyReq.setHeader('Accept', 'application/vnd.github.v3+json')
          })
        },
      },
      '/api/tistory': {
        target: 'https://rilaa.tistory.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => {
          // /api/tistory/rss -> /rss
          const newPath = path.replace(/^\/api\/tistory/, '')
          console.log('프록시 경로 변환:', path, '->', newPath)
          return newPath
        },
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('프록시 요청:', req.url, '->', proxyReq.path)
            proxyReq.setHeader('User-Agent', 'Rila-Portfolio')
            proxyReq.setHeader('Accept', 'application/rss+xml, application/xml, text/xml')
            proxyReq.setHeader('Origin', 'http://localhost:5173')
          })
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('프록시 응답 상태:', proxyRes.statusCode)
          })
          proxy.on('error', (err, req, res) => {
            console.error('프록시 에러:', err.message)
          })
        },
      },
    },
  },
})
