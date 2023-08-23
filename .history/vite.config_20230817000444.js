import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    proxy({
      '/api': {
        target: 'http://localhost:5173', // Replace with your API endpoint
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }),],
})
