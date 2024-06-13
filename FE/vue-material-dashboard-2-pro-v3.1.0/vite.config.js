import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
plugins: [vue()],
resolve: {
alias: {
    '@': '/src' // 수정: 절대 경로로 변경
}
},
server: {
proxy: {
    '/api': {
    target: 'http://localhost:3000', // 수정: API 요청이 보내질 서버의 주소로 변경
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '')
    }
}
}
})