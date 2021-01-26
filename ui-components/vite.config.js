import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vite.config.js
const path = require('path')

export default defineConfig({
    plugins: [vue()],
    build: {
        minify: false,
        lib: {
            entry: path.resolve(__dirname, 'lib/index.js'),
            name: 'MyLib',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['vue']
        }
    }
})
