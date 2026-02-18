import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: [
      '974e-2403-a080-832-9d54-14cd-de07-c7b1-dd3c.ngrok-free.app'
    ]
  }
})
