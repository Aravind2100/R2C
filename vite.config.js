import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/r2c/', 
  build: {
    outDir: 'build',  // Change the output directory to 'build'
  },
})
