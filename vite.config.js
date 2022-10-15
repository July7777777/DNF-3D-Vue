import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.vue', '.png','.mp3','.jpg','.ogg','.js'],
    alias: {
      '@': resolve(__dirname, './src'),
      },
  },
})
