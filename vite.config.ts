import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({ 
      registerType: "autoUpdate", 
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "android-icon-192x192.png"],
      devOptions: { enabled: true },
      selfDestroying: true,
      manifest: {
        name: "My Portfolio",
        short_name: "Portfolio",
        description: "Overview of my personal achievements.",
        theme_color: "#171717",
        background_color: "#000000",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
        icons: [
          {
            src: "/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "/maskable_icon.png",
            sizes: "225x225",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      }
    })
  ],
})
