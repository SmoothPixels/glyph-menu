# Changelog

## 1.1.1 (2026-09-24)

- The mark is always rendered as plain text. It used to go through
  WidgetButton's own label, which older shells leave on Qt's AutoText, so
  a crafted `customText` could be read as rich text and load an external
  resource. The widget now draws the mark in its own `Text` pinned to
  `Text.PlainText`.
- `tools/install-menu-entries.sh` is gone. The optional menu picker is
  now added by pasting `extensions/omarchy-menu.snippet.jsonc` into your
  own `omarchy-menu.jsonc` (see the README), so the plugin no longer
  writes to any config file.
- The menu picker rows no longer show a checkmark on the active mark, and
  `tools/current-mark.sh`, which read `shell.json` to work it out, is gone.
  The plugin now reads no config files either. If you pasted the menu
  rows before, paste the current ones again.

## 1.1.0 (2026-09-22)

- The native Omarchy mark is in the catalog. The stock menu button draws
  U+E900 from Omarchy's own bundled font rather than a Nerd Font glyph, so
  it was the one built-in mark missing. Glyph entries can now name their
  own font, and the bar widget, the menu picker sync and the preview
  renderer honour it. 141 marks in total.
- Em dashes removed from the README and Glyphs.js, and the LICENSE no
  longer carries a copyright line that did not apply.

## 1.0.0 (2026-09-17)

- First listing. A pickable mark for the Omarchy menu button: 140
  built-in Nerd Font glyphs or any custom text, with an optional
  Style > Menu Bar picker. Click behaviour unchanged.
