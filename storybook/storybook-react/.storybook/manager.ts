import { addons } from "@storybook/manager-api";
import vizzlyTheme from "./vizzlyTheme";

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  enableShortcuts: false,
  showToolbar: false,
  theme: vizzlyTheme,
  selectedPanel: undefined,
  initialActive: "sidebar",
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: false },
    grid: { hidden: true },
    outline: { hidden: true },
  },
});
