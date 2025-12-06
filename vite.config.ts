import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
    plugins: [
        react(),
        imagetools(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Set the load path so Sass can find your files
                loadPaths: [path.resolve(__dirname, 'src/scss')],
                // Inject abstracts into EVERY .scss file automatically
                additionalData: `@use "abstracts" as *;`
            }
        }
    }
})