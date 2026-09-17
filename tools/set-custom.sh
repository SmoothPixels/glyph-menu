#!/bin/bash
# Launched from the Style > Menu Bar > Glyph Mark > Custom text… menu row
# (see extensions/omarchy-menu.snippet.jsonc), inside a floating terminal.
set -euo pipefail

PLUGIN_ID="io.github.SmoothPixels.glyph-menu"

echo "Custom mark text (emoji, glyph, or word):"
if ! read -r text; then
  text=""
fi

if [[ -z $text ]]; then
  echo "No text entered, leaving the mark unchanged." >&2
  exit 130
fi

omarchy bar set "$PLUGIN_ID" customText "$text"
omarchy bar set "$PLUGIN_ID" mark custom
