import { SettingsCategory } from "@/types"
import { UIState } from "./types"

export function getDefaultUIState(): UIState {
  const state: UIState = {
    hasBetaAccess: false,
    themeName: "backstage",
    showApiKeys: false,
    showSettings: SettingsCategory.NONE,
    showImporter: false,
    showTimeline: true,
    showExplorer: false,
    showVideoPlayer: true,
    showAssistant: false,
    showFPS: false,
    followCursor: false,
    editorFontSize: 12,
  }

  return state
}
