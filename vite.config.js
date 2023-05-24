import {defineConfig} from "vite";
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            outDir: "build",
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
            },
            devOptions: {
                enabled: true
            },
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
            manifest: {
                name: 'WordReverse',
                short_name: 'Reverse',
                description: 'FirstPWAApp',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'icon.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                ]
            }
        })
    ],
    server: {
        port: 9000,
    },
})
