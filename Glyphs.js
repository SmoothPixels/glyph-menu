// Single source of truth for every built-in mark. Each entry is
// { id, label, code, set, font? }: `id` is the enum value stored in
// settings, `label` is shown in the marketplace/README, `code` is the
// glyph's codepoint as a hex string, `set` is the icon set it comes from
// (for reference only; the shell just needs the codepoint). `font` is
// optional and only needed when a glyph does NOT live in a Nerd Font: it
// names the font family that codepoint actually renders in, and overrides
// the `nerdFont` setting for that one entry (see BarWidget.qml). Every
// entry below is a Nerd Fonts codepoint except "omarchy", which is
// Omarchy's own private-use glyph from the `omarchy` font it installs
// itself (/usr/share/fonts/omarchy/omarchy.ttf) — the same mark and font
// the stock omarchy.menu bar button uses.
//
// Codepoints are copied straight from the Nerd Fonts project's
// glyphnames.json (the data behind nerdfonts.com/cheat-sheet), not
// retyped by hand, to avoid shipping a codepoint that only happens to
// render on one machine's font subset. Run `node tools/sync-manifest.js`
// after editing this file to regenerate the manifest's enum options.
function glyphs() {
  return [
    { id: "omarchy", label: "Omarchy", code: "e900", set: "omarchy", font: "omarchy" },
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
    { id: "cloud", label: "Cloud", code: "f0c2", set: "fa" },

    // More distro logos
    { id: "fedora", label: "Fedora", code: "e7d9", set: "dev" },
    { id: "debian", label: "Debian", code: "e77d", set: "dev" },
    { id: "mint", label: "Linux Mint", code: "e924", set: "dev" },
    { id: "manjaro", label: "Manjaro", code: "f312", set: "linux" },
    { id: "gentoo", label: "Gentoo", code: "e7e6", set: "dev" },
    { id: "opensuse", label: "openSUSE", code: "e857", set: "dev" },
    { id: "redhat", label: "Red Hat", code: "e7bb", set: "dev" },
    { id: "centos", label: "CentOS", code: "e78a", set: "dev" },
    { id: "alpine", label: "Alpine", code: "f300", set: "linux" },
    { id: "void", label: "Void", code: "f32e", set: "linux" },
    { id: "nixos", label: "NixOS", code: "f313", set: "linux" },
    { id: "elementary", label: "elementary OS", code: "f309", set: "linux" },
    { id: "popos", label: "Pop!_OS", code: "f32a", set: "linux" },
    { id: "kali", label: "Kali Linux", code: "e91e", set: "dev" },
    { id: "freebsd", label: "FreeBSD", code: "f30c", set: "linux" },
    { id: "android", label: "Android", code: "f17b", set: "fa" },
    { id: "raspberrypi", label: "Raspberry Pi", code: "e722", set: "dev" },
    { id: "puppy", label: "Puppy Linux", code: "f341", set: "linux" },
    { id: "slackware", label: "Slackware", code: "f318", set: "linux" },
    { id: "zorin", label: "Zorin OS", code: "f32f", set: "linux" },
    { id: "endeavour", label: "EndeavourOS", code: "f322", set: "linux" },
    { id: "artix", label: "Artix Linux", code: "f31f", set: "linux" },

    // Coding tools
    { id: "vim", label: "Vim", code: "e7c5", set: "dev" },
    { id: "neovim", label: "Neovim", code: "f36f", set: "linux" },
    { id: "vscode", label: "VS Code", code: "f0a1e", set: "md" },
    { id: "sublime", label: "Sublime Text", code: "e7aa", set: "dev" },
    { id: "docker", label: "Docker", code: "e7b0", set: "dev" },
    { id: "npm", label: "npm", code: "e71e", set: "dev" },
    { id: "python", label: "Python", code: "e73c", set: "dev" },
    { id: "javascript", label: "JavaScript", code: "e781", set: "dev" },
    { id: "react", label: "React", code: "e7ba", set: "dev" },
    { id: "nodejs", label: "Node.js", code: "e719", set: "dev" },
    { id: "rust", label: "Rust", code: "e7a8", set: "dev" },
    { id: "go", label: "Go", code: "e724", set: "dev" },
    { id: "database", label: "Database", code: "f1c0", set: "fa" },
    { id: "server", label: "Server", code: "f233", set: "fa" },
    { id: "keyboard", label: "Keyboard", code: "f11c", set: "fa" },
    { id: "mouse", label: "Mouse", code: "f245", set: "fa" },
    { id: "gitlab", label: "GitLab", code: "e7eb", set: "dev" },
    { id: "bitbucket", label: "Bitbucket", code: "e703", set: "dev" },
    { id: "tmux", label: "Tmux", code: "ebc8", set: "cod" },
    { id: "html5", label: "HTML5", code: "e736", set: "dev" },
    { id: "css3", label: "CSS3", code: "e749", set: "dev" },
    { id: "java", label: "Java", code: "e738", set: "dev" },
    { id: "ruby", label: "Ruby", code: "e739", set: "dev" },
    { id: "php", label: "PHP", code: "e73d", set: "dev" },
    { id: "jenkins", label: "Jenkins", code: "e767", set: "dev" },
    { id: "jquery", label: "jQuery", code: "e750", set: "dev" },
    { id: "jira", label: "Jira", code: "e75c", set: "dev" },
    { id: "julia", label: "Julia", code: "e80d", set: "dev" },

    // Letter J (monogram styles)
    { id: "letter_j", label: "J", code: "f0af7", set: "md" },
    { id: "letter_j_box", label: "J (box)", code: "f0b11", set: "md" },
    { id: "letter_j_box_outline", label: "J (box outline)", code: "f0c06", set: "md" },
    { id: "letter_j_circle", label: "J (circle)", code: "f0c07", set: "md" },
    { id: "letter_j_circle_outline", label: "J (circle outline)", code: "f0c08", set: "md" },

    // Gaming
    { id: "dice", label: "Dice", code: "f076e", set: "md" },
    { id: "playstation", label: "PlayStation", code: "ed18", set: "fa" },
    { id: "xbox", label: "Xbox", code: "ed3e", set: "fa" },
    { id: "steam", label: "Steam", code: "f1b6", set: "fa" },
    { id: "nintendo_switch", label: "Switch", code: "f07e1", set: "md" },
    { id: "controller", label: "Controller", code: "f05ba", set: "md" },
    { id: "trophy", label: "Trophy", code: "f091", set: "fa" },
    { id: "sword", label: "Sword", code: "f04e5", set: "md" },
    { id: "chess", label: "Chess", code: "ed5f", set: "fa" },
    { id: "target", label: "Target", code: "f05b", set: "fa" },

    // Fun / anime-adjacent
    { id: "ninja", label: "Ninja", code: "edce", set: "fa" },
    { id: "flower", label: "Flower", code: "f024a", set: "md" },
    { id: "robot_happy", label: "Happy robot", code: "f1719", set: "md" },
    { id: "unicorn", label: "Unicorn", code: "f15c2", set: "md" },
    { id: "panda", label: "Panda", code: "f03da", set: "md" },
    { id: "owl", label: "Owl", code: "f03d2", set: "md" },
    { id: "spider", label: "Spider", code: "f11ea", set: "md" },
    { id: "crown", label: "Crown", code: "edeb", set: "fa" },
    { id: "bomb", label: "Bomb", code: "f1e2", set: "fa" },
    { id: "yin_yang", label: "Yin Yang", code: "eee9", set: "fa" },
    { id: "peace", label: "Peace", code: "eed6", set: "fa" },
    { id: "mushroom", label: "Mushroom", code: "f07df", set: "md" },

    // More animals
    { id: "dog", label: "Dog", code: "f0a43", set: "md" },
    { id: "elephant", label: "Elephant", code: "f07c6", set: "md" },
    { id: "snake", label: "Snake", code: "f150e", set: "md" },
    { id: "fish", label: "Fish", code: "f023a", set: "md" },
    { id: "bird", label: "Bird", code: "f15c6", set: "md" },
    { id: "rabbit", label: "Rabbit", code: "f0907", set: "md" },
    { id: "bear", label: "Bear", code: "f18fb", set: "md" },
    { id: "koala", label: "Koala", code: "f173f", set: "md" },
    { id: "kangaroo", label: "Kangaroo", code: "f1558", set: "md" },
    { id: "penguin", label: "Penguin", code: "f0ec0", set: "md" },
    { id: "turtle", label: "Turtle", code: "f0cd7", set: "md" },
    { id: "butterfly", label: "Butterfly", code: "f1589", set: "md" },
    { id: "bee", label: "Bee", code: "f0fa1", set: "md" },
    { id: "horse", label: "Horse", code: "f15bf", set: "md" },
    { id: "cow", label: "Cow", code: "f019a", set: "md" },
    { id: "pig", label: "Pig", code: "f0401", set: "md" },
    { id: "sheep", label: "Sheep", code: "f0cc6", set: "md" },
    { id: "shark", label: "Shark", code: "f18ba", set: "md" },
    { id: "bat", label: "Bat", code: "f0b5f", set: "md" },
    { id: "snail", label: "Snail", code: "f1677", set: "md" },
    { id: "spider_web", label: "Spider web", code: "f0bca", set: "md" }
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
