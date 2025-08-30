import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // optimizeDeps: {
  //   include: ['@mui/icons-material/EmojiEventsOutlined']
  // }
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})