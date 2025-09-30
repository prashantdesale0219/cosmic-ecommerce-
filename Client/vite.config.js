import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react', 
            'react-dom', 
            'react-router-dom'
          ],
          'home': ['./src/pages/Home.jsx'],
          'product': ['./src/pages/ProductDetail.jsx'],
          'checkout': ['./src/pages/Checkout.jsx'],
          'account': ['./src/pages/Account.jsx']
        }
      }
    }
  }
})