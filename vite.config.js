import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from https://nottnovi.github.io/Portfolio_new/
// If you move it to a custom domain or a <username>.github.io repo, change base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_new/',
});
