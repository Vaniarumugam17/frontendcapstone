import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Specify the entry point for your application
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    // Set the correct path to your entry JavaScript file
    rollupOptions: {
      input: '/src/main.js',
    },
  },
});
