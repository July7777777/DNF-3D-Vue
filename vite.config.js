import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    extensions: ['.vue', '.png','.mp3','.jpg','.ogg','.js'],
    alias: {
      '@': resolve(__dirname, './src'),
      },
  },
})
