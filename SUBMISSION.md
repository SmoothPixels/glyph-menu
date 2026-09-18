# Marketplace submission

Pre-filled answers for the submission issue at
https://github.com/omacom/omarchy-plugin-marketplace/issues/new?template=submit-plugin.yml

Do not file this until the plugin has been installed and tested on a real
Omarchy machine (see the "Next step" section of the working notes): the
checklist below asserts things that need to be true, not aspirational.

**Repository URL**
```
https://github.com/SmoothPixels/glyph-menu
```

**Category**
```
Appearance
```

**Tags** (max 3)
```
Bar, Launcher, Quickshell
```

**Suggest a missing tag**
_(leave blank)_

**Maintainer notes**
```
Replaces omarchy.menu's bar button with a pickable mark (141+ built-ins,
mostly Nerd Font icons plus Omarchy's own mark, or custom text/emoji).
Click behaviour is unchanged: left opens
the Omarchy menu, right opens a terminal, both via the same IPC calls
omarchy.menu itself uses. No install hooks, no network access, no sudo,
no runtime dependencies beyond Omarchy itself.

omarchy.menu must stay enabled: its popup is a separate kind of the same
plugin this button calls into, so disabling it would break the click
handler. The README has the manual command to remove omarchy.menu's own
bar entry (leaving the plugin enabled) and the command to restore it.

Also ships an optional "Style > Menu Bar > Glyph Mark" submenu (a real
point-and-click picker, since there's no settings-form GUI yet). It is
opt-in only: a bundled script the user runs themselves splices it into
their own extensions/omarchy-menu.jsonc. Nothing runs automatically on
install.
```

**Submission checklist**
- [x] The repository is public and contains installation and removal instructions.
- [x] I have documented the plugin license and any external dependencies.
- [x] I confirm that I own or have permission to submit this plugin and its preview assets.
- [x] The plugin does not overwrite user configuration without explicit consent.
- [x] I understand that approval is for listing and is not a security review.
