import QtQuick
import qs.Ui
import qs.Commons
import "Glyphs.js" as Glyphs

BarWidget {
  id: root
  moduleName: "io.github.smoothpixels.glyph-menu"

  readonly property string markId: setting("mark", "arch")
  readonly property var markEntry: Glyphs.findGlyph(markId)
  readonly property string customText: setting("customText", "")
  readonly property string customFont: setting("customFont", "")
  readonly property string nerdFont: setting("nerdFont", "")
  readonly property real fontSizeSetting: setting("fontSize", 0)
  readonly property string colorSetting: setting("color", "")

  readonly property bool isCustom: markId === "custom"
  readonly property string markText: isCustom ? customText : (markEntry ? Glyphs.glyphChar(markEntry.code) : "")
  readonly property string markFontFamily: {
    if (isCustom) {
      if (customFont !== "") return customFont
      if (nerdFont !== "") return nerdFont
      return root.bar ? root.bar.fontFamily : Style.font.family
    }
    // A glyph's own `font` (set only for marks that don't live in a Nerd
    // Font, e.g. "omarchy") always wins: it names the one family that
    // actually contains that codepoint, so letting `nerdFont` override it
    // would just swap a real glyph for a tofu box.
    if (markEntry && markEntry.font) return markEntry.font
    if (nerdFont !== "") return nerdFont
    return root.bar ? root.bar.fontFamily : Style.font.family
  }
  readonly property real markFontSize: fontSizeSetting > 0 ? fontSizeSetting : Style.font.body
  readonly property color markColor: {
    if (colorSetting === "") return root.bar ? root.bar.barForeground : Color.foreground
    if (colorSetting === "accent") return Color.accent
    return colorSetting
  }

  implicitWidth: button.implicitWidth
  implicitHeight: button.implicitHeight

  WidgetButton {
    id: button
    anchors.fill: parent
    bar: root.bar
    text: root.markText
    fontFamily: root.markFontFamily
    fontSize: root.markFontSize
    foreground: root.markColor
    horizontalMargin: 7.5
    onPressed: function(button) {
      if (!root.bar) return
      if (button === Qt.RightButton) root.bar.run("xdg-terminal-exec")
      else root.bar.run("omarchy-shell shell toggle omarchy.menu '{\"menu\":\"root\"}'")
    }
  }
}
