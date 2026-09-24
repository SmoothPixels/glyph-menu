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
    // The mark is drawn by `mark` below, not by WidgetButton's own label:
    // customText is user input, and older shells leave that label on Qt's
    // default AutoText, which would sniff it for rich text. The button only
    // handles clicks and sizing, and is sized from `mark`.
    labelVisible: false
    hasVisualContent: root.markText !== ""
    horizontalMargin: 7.5
    fixedWidth: button.vertical ? -1 : Math.max(12, mark.implicitWidth + button.scaledHorizontalMargin * 2)
    fixedHeight: button.vertical ? Math.max(12, mark.implicitHeight + button.scaledVerticalPadding * 2) : -1
    onPressed: function(button) {
      if (!root.bar) return
      if (button === Qt.RightButton) root.bar.run("xdg-terminal-exec")
      else root.bar.run("omarchy-shell shell toggle omarchy.menu '{\"menu\":\"root\"}'")
    }

    Text {
      id: mark
      anchors.centerIn: parent
      textFormat: Text.PlainText
      text: root.markText
      color: root.markColor
      font.family: root.markFontFamily
      font.pixelSize: root.markFontSize
      renderType: Text.NativeRendering
      horizontalAlignment: Text.AlignHCenter
      verticalAlignment: Text.AlignVCenter
    }
  }
}
