import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    ViteSitemap({
      hostname: 'https://arkansasaifoundry.org',
      routes: ['/', '/blog', '/consulting'],
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0
    })
  ],
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  }
})
