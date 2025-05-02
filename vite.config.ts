import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/vite1/', // 앞뒤 / 이거 빼먹지 말것.
  plugins: [react()],
})