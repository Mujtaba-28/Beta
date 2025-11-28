import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  },
  resolve: {
    alias: {
      // FIX: Replaced `process.cwd()` which was causing a type error. This uses `import.meta.url` which is the modern ESM way to get the current file's path.
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
});
