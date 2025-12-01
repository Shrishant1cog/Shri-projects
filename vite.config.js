import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    // gzip
    compression({ algorithm: 'gzip', ext: '.gz', deleteOriginFile: false, threshold: 10240 }),
    // brotli
    compression({ algorithm: 'brotliCompress', ext: '.br', deleteOriginFile: false, threshold: 10240 })
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
