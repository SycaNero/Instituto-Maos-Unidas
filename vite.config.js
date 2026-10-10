import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Todas as páginas HTML precisam estar listadas para entrar no build.
export default defineConfig({
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        doacoes: resolve(__dirname, 'doacoes.html'),
        voluntariado: resolve(__dirname, 'voluntariado.html'),
      },
    },
  },
});
