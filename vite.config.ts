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
      // FIX: Replaced `__dirname` with `process.cwd()` to fix "Cannot find name '__dirname'" error.
      // This error occurs because __dirname is not available in ES modules by default.
      // process.cwd() provides the current working directory, which is the project root in this context.
      '@': path.resolve(process.cwd(), '.'),
    },
  },
});