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
      "af9f-2403-a080-833-5c29-390f-124-556c-2a8f.ngrok-free.app"
    ]
  }
})