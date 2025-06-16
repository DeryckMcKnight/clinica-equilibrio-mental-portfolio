import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(),tailwindcss()],
=======
  base: '/clinica-equilibrio-mental-portfolio/',  // <- nome do repositório no GitHub
  plugins: [react(), tailwindcss()],
>>>>>>> 3ea99e3e8c1d4573ca21fdd05831ef7a716d21d0
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
