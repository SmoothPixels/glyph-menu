#!/bin/bash
# Prints the current "mark" setting for io.github.smoothpixels.glyph-menu.
# Used by the Style > Menu Bar > Glyph Mark menu rows (see
# extensions/omarchy-menu.snippet.jsonc) to show a checkmark next to the
# active choice.
set -euo pipefail

find_mark() {
  local file="$1"
  [[ -f $file ]] || return 1
  jq -r '
    [.bar.layout.left[]?, .bar.layout.center[]?, .bar.layout.right[]?]
    | map(select(.id == "io.github.smoothpixels.glyph-menu"))
    | first
    | .mark // empty
  ' "$file" 2>/dev/null
}

mark=$(find_mark "$HOME/.config/omarchy/shell.json" || true)
if [[ -z $mark ]]; then
  mark=$(find_mark "${OMARCHY_PATH:-/usr/share/omarchy}/config/omarchy/shell.json" || true)
fi
echo "${mark:-arch}"
