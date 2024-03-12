import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  preview: {
    port: 8081,
    strictPort: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 8081,
    strictPort: true,
    host: true,
  },
});