import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://ie.u-ryukyu.ac.jp/~e245719/',
  plugins: [react()],
})
