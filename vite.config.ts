import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
      // include: ['/src/components/*.vue']
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      // dirs: ['components']
    }),
    vue(),
  ],
  build: {
    sourcemap: true
  }
})
