import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/GITHUB_INACAP/', // Asegúrate que este sea el nombre exacto de tu repositorio
})