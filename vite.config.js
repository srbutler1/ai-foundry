import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sitemap } from 'vite-plugin-sitemap'

const domain = 'https://arkansasaifoundry.com' 

export default defineConfig({
  base: '/', // Base is just / for custom domains
  plugins: [
    react(),
    sitemap({
      hostname: domain,
      routes: ['/'], // Just the home page for now
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0
    })
  ],
})