import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// unocss
import unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
