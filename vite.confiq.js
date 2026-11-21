import { defineConfig } from 'vite'
import { resolve } from 'node:path'

const areaSlugs = [
  'hull',
  'york',
  'leeds',
  'batley',
  'oldham',
  'halifax',
  'barnsley',
  'bradford',
  'dewsbury',
  'mirfield',
  'harrogate',
  'sheffield',
  'wakefield',
  'castleford',
  'manchester',
  'heckmondwike',
  'huddersfield',
  'pontefract-wf8',
  'yorkshire-the-humber',
]

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        services: resolve(__dirname, 'services.html'),
        areas: resolve(__dirname, 'areas.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        ...Object.fromEntries(areaSlugs.map((slug) => [slug, resolve(__dirname, `areas/${slug}.html`)])),
      },
    },
  },
})
