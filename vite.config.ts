import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  },
  resolve: {
    alias: {
      // FIX: Replaced `process.cwd()` with `__dirname` to avoid TypeScript type errors
      // in environments where Node.js `process` types are not fully available.
      // `path.resolve(__dirname, '.')` correctly resolves to the project's root directory.
      '@': path.resolve(__dirname, '.'),
    },
  },
});