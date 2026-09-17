// Single source of truth for every built-in mark. Each entry is
// { id, label, code, set }: `id` is the enum value stored in settings,
// `label` is shown in the marketplace/README, `code` is the Nerd Font
// codepoint as a hex string, `set` is the Nerd Fonts icon set it comes
// from (for reference only; the shell just needs the codepoint).
//
// Codepoints are copied straight from the Nerd Fonts project's
// glyphnames.json (the data behind nerdfonts.com/cheat-sheet), not
// retyped by hand, to avoid shipping a codepoint that only happens to
// render on one machine's font subset. Run `node tools/sync-manifest.js`
// after editing this file to regenerate the manifest's enum options.
function glyphs() {
  return [
    { id: "arch", label: "Arch Linux", code: "e732", set: "dev" },
    { id: "hyprland", label: "Hyprland", code: "f359", set: "linux" },
    { id: "linux", label: "Linux", code: "f17c", set: "fa" },
    { id: "apple", label: "Apple", code: "f179", set: "fa" },
    { id: "windows", label: "Windows", code: "e70f", set: "dev" },
    { id: "ubuntu", label: "Ubuntu", code: "ef72", set: "fa" },
    { id: "terminal", label: "Terminal", code: "f120", set: "fa" },
    { id: "code", label: "Code", code: "f121", set: "fa" },
    { id: "git", label: "Git", code: "e702", set: "dev" },
    { id: "github", label: "GitHub", code: "f408", set: "oct" },
    { id: "pacman", label: "Pac-Man", code: "f0baf", set: "md" },
    { id: "ghost", label: "Ghost", code: "f02a0", set: "md" },
    { id: "alien", label: "Alien", code: "f089a", set: "md" },
    { id: "duck", label: "Duck", code: "f01e5", set: "md" },
    { id: "skull", label: "Skull", code: "f068c", set: "md" },
    { id: "space_invaders", label: "Space Invader", code: "f0bc9", set: "md" },
    { id: "robot", label: "Robot", code: "f06a9", set: "md" },
    { id: "cat", label: "Cat", code: "eeed", set: "fa" },
    { id: "dragon", label: "Dragon", code: "eef8", set: "fa" },
    { id: "heart", label: "Heart", code: "f004", set: "fa" },
    { id: "star", label: "Star", code: "f005", set: "fa" },
    { id: "rocket", label: "Rocket", code: "f135", set: "fa" },
    { id: "bug", label: "Bug", code: "f188", set: "fa" },
    { id: "coffee", label: "Coffee", code: "f0f4", set: "fa" },
    { id: "gamepad", label: "Gamepad", code: "f11b", set: "fa" },
    { id: "music", label: "Music", code: "f001", set: "fa" },
    { id: "camera", label: "Camera", code: "f030", set: "fa" },
    { id: "bolt", label: "Bolt", code: "f0e7", set: "fa" },
    { id: "flask", label: "Flask", code: "f0c3", set: "fa" },
    { id: "moon", label: "Moon", code: "f186", set: "fa" },
    { id: "sun", label: "Sun", code: "f185", set: "fa" },
    { id: "magic", label: "Magic wand", code: "f0d0", set: "fa" },
    { id: "paw", label: "Paw", code: "f1b0", set: "fa" },
    { id: "fire", label: "Fire", code: "f06d", set: "fa" },
    { id: "key", label: "Key", code: "f084", set: "fa" },
    { id: "leaf", label: "Leaf", code: "f06c", set: "fa" },
    { id: "puzzle", label: "Puzzle piece", code: "f12e", set: "fa" },
    { id: "shield", label: "Shield", code: "f132", set: "fa" },
    { id: "smile", label: "Smile", code: "f118", set: "fa" },
    { id: "diamond", label: "Diamond", code: "f29f", set: "fa" },
    { id: "anchor", label: "Anchor", code: "f13d", set: "fa" },
    { id: "cloud", label: "Cloud", code: "f0c2", set: "fa" }
  ]
}

function glyphChar(code) {
  return String.fromCodePoint(parseInt(code, 16))
}

function findGlyph(id) {
  var list = glyphs()
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i]
  }
  return null
}

if (typeof module !== "undefined") {
  module.exports = {
    glyphs: glyphs,
    glyphChar: glyphChar,
    findGlyph: findGlyph
  }
}
