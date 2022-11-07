import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react(),viteCompression({
    verbose: true,
    algorithm: 'brotliCompress',
    ext: 'br'
  })],
  build: {
    outDir: 'public'
  }
})
