// Run this script from project root: node scripts/generate-icons.js
// It writes placeholder PNG icons into `public/`.
const fs = require('fs')
const path = require('path')

const outDir = path.join(__dirname, '..', 'public')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

// Minimal 1x1 transparent PNG (placeholder)
const pngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII='
const buf = Buffer.from(pngBase64, 'base64')

fs.writeFileSync(path.join(outDir, 'icon-192.png'), buf)
fs.writeFileSync(path.join(outDir, 'icon-512.png'), buf)
console.log('Wrote public/icon-192.png and public/icon-512.png (placeholders)')
