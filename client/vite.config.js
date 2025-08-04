// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: true,
    minify: 'esbuild',
    outDir: 'dist',
    manifest: true,
    rollupOptions: {
      input: './index.html',
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          three: ['three'],
          emailjs: ['@emailjs/browser'],
        },
      },
    },
  },
});
