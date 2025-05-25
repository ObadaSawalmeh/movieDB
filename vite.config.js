import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      assets: resolve(__dirname, 'src/assets'),
      utils: resolve(__dirname, 'src/utils'),
      hooks: resolve(__dirname, 'src/hooks'),
      constants: resolve(__dirname, 'src/constants'),
      pages: resolve(__dirname, 'src/pages'),
      layout: resolve(__dirname, 'src/layout'),
      context: resolve(__dirname, 'src/context'),
    },
  },
});
