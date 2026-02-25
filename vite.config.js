import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    host: true,
    strictPort: true,
    allowedHosts: [
      "98f9-2403-a080-832-6327-1422-7118-1dd7-3fd2.ngrok-free.app"
    ]
  }
})