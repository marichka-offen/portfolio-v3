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
                // Allow Sass to resolve @/styles/... etc
                loadPaths: [path.resolve(__dirname, 'src/styles')],
                // Automatically expose tokens/mixins/functions without re-importing base styles
                additionalData: [
                    '@use "@/styles/abstracts" as *;',
                    '@use "@/styles/mixins" as *;',
                    '@use "@/styles/utilities/functions" as *;',
                ].join('\n'),
            }
        }
    }
})
