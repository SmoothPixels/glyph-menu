# Glyph Menu

A drop-in replacement for the built-in `omarchy.menu` bar button that lets you
pick the mark it shows instead of the fixed Omarchy glyph. Click behaviour is
unchanged: left click opens the Omarchy menu, right click opens a terminal.

Choose from 141+ built-in glyphs — mostly Nerd Font icons (distro logos,
coding tools, gaming icons, animals, a Pac-Man, a ghost, a dragon, and more),
plus Omarchy's own mark — or set any custom text, pasted glyph, or emoji.

No runtime dependencies beyond Omarchy itself and a Nerd Font (already part
of a standard Omarchy install): no network access, no install hooks, no sudo.
The dev tooling under `tools/` (for regenerating the catalog) additionally
needs Node.js and `rsvg-convert` (from `librsvg`), neither of which is needed
to install or use the plugin.

## Available marks

![Every built-in mark, rendered through the real font](assets/marks.png)

Rendered as an image (not raw glyph characters) so it displays correctly here
on GitHub even without a Nerd Font installed. The `mark:` value printed under
each icon is what you pass to `omarchy bar set` (see [Settings](#settings)) or
select from the [menu picker](#optional-a-real-menu-picker). To list them from
a checkout instead of reading the image:

```sh
node -e 'require("./Glyphs.js").glyphs().forEach(g => console.log(g.id))'
```

## Install

```sh
omarchy plugin add https://github.com/SmoothPixels/glyph-menu.git --enable
```

Then drop `omarchy.menu`'s own button from the bar, but **do not**
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

There's no graphical settings form for bar widgets in Omarchy yet (this ships
its manifest schema for whenever one exists, no changes will be needed then),
so configure from the CLI:

```sh
omarchy bar set io.github.smoothpixels.glyph-menu mark pacman
```

| Key | Effect |
| --- | --- |
| `mark` | The glyph. Set to `custom` to use `customText` instead. |
| `customText` | Any text or character: a pasted glyph, an emoji, a word. |
| `customFont` | Font family for the custom mark. Empty falls back to `nerdFont`. |
| `nerdFont` | Font family the built-in Nerd Font marks are drawn in. Empty follows the bar's own font. Ignored by the Omarchy mark, which always uses Omarchy's own font so it renders correctly. |
| `fontSize` | Pixel size. `0` follows the bar. |
| `color` | Empty follows the active theme. `accent`, or a `#rrggbb` hex value. |

Marks are single-colour text glyphs, so they follow the theme (or a fixed
color/accent you choose): there's no multicolour distro logo option, the same
tradeoff every Nerd Font icon in the bar already makes.

If a change doesn't seem to take (rare, seen after `omarchy plugin update`
specifically), check `~/.config/omarchy/shell.json` first. If it already shows
the new value but the bar hasn't caught up, run `omarchy-restart-shell` rather
than repeating the `bar set` command.

### Optional: a real menu picker

`omarchy bar set` is a command, not a picker. If you'd rather click through a
menu, this ships a ready-made "Style → Menu Bar → Glyph Mark" submenu: one
checkable row per glyph, using the Omarchy menu's own icon column (so it
genuinely shows icons, unlike a settings-form dropdown):

![Style > Menu Bar > Glyph Mark submenu, with Arch Linux checked](assets/menu-picker.png)

It's opt-in: nothing in this plugin writes to your menu config on its own,
since a plugin silently editing your files on install is exactly what the
marketplace review checklist asks authors *not* to do. Install it yourself:

```sh
~/.config/omarchy/plugins/io.github.smoothpixels.glyph-menu/tools/install-menu-entries.sh
```

This splices `extensions/omarchy-menu.snippet.jsonc` into your own
`~/.config/omarchy/extensions/omarchy-menu.jsonc` (creating it if missing).
The shell watches that file, so it applies within a second or two, no restart
needed. To remove it later, delete the `"style.bar.glyph"` block from that
file by hand.

**Re-run this script after `omarchy plugin update`** if you want new glyphs
to show up in the menu: it resyncs (replaces its own rows, leaves everything
else in your extensions file alone) rather than skip because it's already
there, but only when you run it. `omarchy plugin update` only updates the
plugin's own files, not your menu config, so the menu can otherwise lag
behind the catalog.

## Remove

```sh
omarchy plugin remove io.github.smoothpixels.glyph-menu
omarchy bar put omarchy.menu --section left
```

## Development

`Glyphs.js` is the single source of truth for the built-in mark catalog. After
editing it, regenerate the manifest's dropdown options, the optional menu
snippet, and the `assets/marks.png` preview (needs `rsvg-convert`, from
`librsvg`):

```sh
node tools/sync-manifest.js
node tools/sync-menu.js
node tools/render-preview.js
```

Validate before publishing:

```sh
omarchy plugin validate ~/.config/omarchy/plugins/io.github.smoothpixels.glyph-menu
qmllint -I "$OMARCHY_PATH/shell" ~/.config/omarchy/plugins/io.github.smoothpixels.glyph-menu/BarWidget.qml
```
