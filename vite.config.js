import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths: the built site works at any address
// (nottnovi.github.io/portfolio/, a custom domain, or a renamed repo).
export default defineConfig({
  plugins: [react()],
  base: './',
});
