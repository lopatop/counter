import { defineConfig } from 'vite'

export default defineConfig({
  base: '/counter/',  // Обязательно указываем /<имя-репозитория>/
  build: {
    outDir: 'dist',
  },
})
