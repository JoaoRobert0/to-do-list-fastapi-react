import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,           // Permite acesso externo (ex: pelo navegador do host)
    watch: {
      usePolling: true,   // Força o Vite a detectar mudanças no volume montado
    },
  },
})
