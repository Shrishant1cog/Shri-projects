import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    target: 'es2017',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor.react'
            return 'vendor'
          }
        }
      }
    },
    chunkSizeWarningLimit: 1500
  },
  server: {
    fs: {
      allow: ['.']
    }
  }
})
