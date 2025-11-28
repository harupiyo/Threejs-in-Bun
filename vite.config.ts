import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths for production builds
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
