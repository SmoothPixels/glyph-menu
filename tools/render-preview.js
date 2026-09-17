#!/usr/bin/env node
// Renders assets/marks.svg (-> marks.png), a grid of every built-in glyph,
// rendered through the real font so it displays correctly on GitHub
// regardless of whether the viewer has a Nerd Font installed. Regenerate
// after editing Glyphs.js:
//
//   node tools/render-preview.js
//
// Requires rsvg-convert (librsvg) to rasterize the SVG to PNG.
"use strict"

const fs = require("fs")
const path = require("path")
const { execFileSync } = require("child_process")

const root = path.join(__dirname, "..")
const { glyphs } = require(path.join(root, "Glyphs.js"))
const FONT = process.env.GLYPH_MENU_PREVIEW_FONT || "JetBrainsMono Nerd Font"

const COLS = 6
const CELL_W = 170
const CELL_H = 100
const PAD = 24
const TITLE_H = 56

const list = glyphs()
const rows = Math.ceil(list.length / COLS)
const width = COLS * CELL_W + PAD * 2
const height = TITLE_H + rows * CELL_H + PAD * 2

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

const cells = list.map((g, i) => {
  const col = i % COLS
  const row = Math.floor(i / COLS)
  const cx = PAD + col * CELL_W + CELL_W / 2
  const cy = TITLE_H + PAD + row * CELL_H
  const glyph = String.fromCodePoint(parseInt(g.code, 16))
  return `
  <text x="${cx}" y="${cy + 46}" text-anchor="middle" font-family="${FONT}" font-size="38" fill="#e6e6e6">${esc(glyph)}</text>
  <text x="${cx}" y="${cy + 76}" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#9a9a9a">${esc(g.label)}</text>
  <text x="${cx}" y="${cy + 92}" text-anchor="middle" font-family="monospace" font-size="11" fill="#5a5a5a">mark: ${esc(g.id)}</text>`
}).join("\n")

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" fill="#1e1e2e"/>
  <text x="${PAD}" y="${PAD + 26}" font-family="sans-serif" font-size="22" fill="#e6e6e6">Glyph Menu: built-in marks</text>
  <text x="${width - PAD}" y="${PAD + 26}" text-anchor="end" font-family="monospace" font-size="13" fill="#7a7a7a">+ custom text/emoji</text>
  ${cells}
</svg>
`

const outDir = path.join(root, "assets")
fs.mkdirSync(outDir, { recursive: true })
const svgPath = path.join(outDir, "marks.svg")
const pngPath = path.join(outDir, "marks.png")
fs.writeFileSync(svgPath, svg)
execFileSync("rsvg-convert", [svgPath, "-o", pngPath])
console.log(`Rendered ${list.length} marks to ${path.relative(root, pngPath)}`)
