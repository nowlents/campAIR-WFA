import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Camp-AIR-WFA-Admin-Content-Repository/',
  server: {
    port: 5174,
  },
})
