import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': '/src' } },
  cors: true,
  server: {
    proxy: {
      '/api': { target: 'https://api.shiryustudios.com', changeOrigin: true },
    },
  },
})
