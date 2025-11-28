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
      // FIX: Replaced `process.cwd()` with `.` to avoid a TypeScript type error.
      // `path.resolve('.')` correctly resolves to the project's root directory,
      // which is equivalent to `process.cwd()`.
      '@': path.resolve('.'),
    },
  },
});