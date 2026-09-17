#!/usr/bin/env node
// Regenerates manifest.json's "mark" enum options from Glyphs.js, the
// single source of truth. Run this after adding, removing, or renaming
// any entry in Glyphs.js.
"use strict"

const fs = require("fs")
const path = require("path")

const root = path.join(__dirname, "..")
const { glyphs, glyphChar } = require(path.join(root, "Glyphs.js"))

const manifestPath = path.join(root, "manifest.json")
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"))

const options = glyphs().map(function (g) {
  return { value: g.id, label: glyphChar(g.code) + "  " + g.label }
})
options.push({ value: "custom", label: "Custom text…" })

const markField = manifest.barWidget.schema.find(function (f) { return f.key === "mark" })
if (!markField) throw new Error('manifest.json has no "mark" schema field')
markField.options = options

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n")
console.log("Wrote " + options.length + " options (" + (options.length - 1) + " glyphs + custom) to manifest.json")
