import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'corider',
        short_name: 'corider',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#007bff',
        icons: [
          {
            src: 'CoRider.png',
            sizes: '512x512',
            type: 'image/png',
          },

        ],
      },
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: [
        "**/*",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});