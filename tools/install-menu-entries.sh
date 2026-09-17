#!/bin/bash
# Opt-in: adds a "Style > Menu Bar > Glyph Mark" submenu to the Omarchy menu
# by splicing extensions/omarchy-menu.snippet.jsonc into the user's own
# ~/.config/omarchy/extensions/omarchy-menu.jsonc. Run this yourself; nothing
# in this plugin does it automatically (see README.md).
set -euo pipefail

PLUGIN_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
SNIPPET="$PLUGIN_DIR/extensions/omarchy-menu.snippet.jsonc"
TARGET="$HOME/.config/omarchy/extensions/omarchy-menu.jsonc"
MARKER='"style.bar.glyph"'

[[ -f $SNIPPET ]] || { echo "Missing $SNIPPET, run tools/sync-menu.js first." >&2; exit 1; }

mkdir -p "$(dirname "$TARGET")"
if [[ ! -f $TARGET ]]; then
  printf '{\n}\n' > "$TARGET"
fi

if grep -qF "$MARKER" "$TARGET"; then
  echo "Already installed: $MARKER found in $TARGET" >&2
  exit 0
fi

# Splice the snippet's lines just before the file's final closing brace.
# omarchy-menu.jsonc tolerates trailing commas, so this is safe even when
# the snippet becomes the last entries in the file.
tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT

awk -v snippet="$SNIPPET" '
  /^}[[:space:]]*$/ && !done {
    while ((getline line < snippet) > 0) print line
    done = 1
  }
  { print }
' "$TARGET" > "$tmp"

mv "$tmp" "$TARGET"
trap - EXIT
chmod +x "$PLUGIN_DIR/tools/current-mark.sh" "$PLUGIN_DIR/tools/set-custom.sh"

echo "Added Style > Menu Bar > Glyph Mark to $TARGET"
echo "The shell watches this file, so it should pick it up within a second or two."
