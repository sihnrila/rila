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
        additionalData: `@import "./src/assets/scss/reset.scss";`
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
    },
  },
})
