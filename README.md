# Glyph Menu

A drop-in replacement for the built-in `omarchy.menu` bar button that lets you
pick the mark it shows instead of the fixed Omarchy glyph. Click behaviour is
unchanged: left click opens the Omarchy menu, right click opens a terminal.

Choose from 40+ built-in Nerd Font glyphs (distro logos, a Pac-Man, a ghost, a
dragon, and more), or set any custom text, pasted glyph, or emoji.

## Install

```sh
omarchy plugin add https://github.com/SmoothPixels/glyph-menu.git --enable
```

Then drop `omarchy.menu`'s own button from the bar — but **do not**
`omarchy plugin disable omarchy.menu`. That plugin provides both the button
(`bar-widget` kind) and the menu popup itself (`menu` kind); disabling it
turns off both, and this plugin's click handler opens the popup by calling
back into that same `menu` kind. Instead, leave it enabled and just remove
its layout entry so only its popup (loaded on demand, independent of the bar
layout) survives:

```sh
jq -c '(.bar.layout.left, .bar.layout.center, .bar.layout.right) |=
  map(select(.id != "omarchy.menu"))' ~/.config/omarchy/shell.json \
  > /tmp/shell.json.new && mv /tmp/shell.json.new ~/.config/omarchy/shell.json
omarchy-shell shell rescanPlugins
```

## Settings

Configure from Setup → Bar → Glyph Menu, or from the CLI:

```sh
omarchy bar set io.github.SmoothPixels.glyph-menu mark pacman
```

| Key | Effect |
| --- | --- |
| `mark` | The glyph. Set to `custom` to use `customText` instead. |
| `customText` | Any text or character: a pasted glyph, an emoji, a word. |
| `customFont` | Font family for the custom mark. Empty falls back to `nerdFont`. |
| `nerdFont` | Font family the built-in marks are drawn in. Empty follows the bar's own font. |
| `fontSize` | Pixel size. `0` follows the bar. |
| `color` | Empty follows the active theme. `accent`, or a `#rrggbb` hex value. |

Marks are single-colour text glyphs, so they follow the theme (or a fixed
color/accent you choose) — there's no multicolour distro logo option, the same
tradeoff every Nerd Font icon in the bar already makes.

## Remove

```sh
omarchy plugin remove io.github.SmoothPixels.glyph-menu
omarchy bar put omarchy.menu --section left
```

## Development

`Glyphs.js` is the single source of truth for the built-in mark catalog. After
editing it, regenerate the manifest's dropdown options:

```sh
node tools/sync-manifest.js
```

Validate before publishing:

```sh
omarchy plugin validate ~/.config/omarchy/plugins/io.github.SmoothPixels.glyph-menu
qmllint -I "$OMARCHY_PATH/shell" ~/.config/omarchy/plugins/io.github.SmoothPixels.glyph-menu/BarWidget.qml
```
