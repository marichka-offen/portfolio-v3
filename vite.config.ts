import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Allow Sass to resolve @/styles/... etc
                loadPaths: [path.resolve(__dirname, 'src/styles')],
                additionalData: `@use "@/styles/abstracts" as *;`,
            }
        }
    }
})
