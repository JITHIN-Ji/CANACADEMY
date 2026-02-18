import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",   // ✅ ADD THIS
  server: {
    host: true,
    strictPort: true,
  }
})
