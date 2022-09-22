import Widget from "./widget";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "搜索框",
  iconSVG: null,
  needsMeta: true,
  isCanvas: false,
  isMobile: true,
  defaults: {
    widgetName: "search",
    rows: 8,
    columns: 56,
    version: 1,
    rounded: true,
    readonly: false,
    showButton: false,
    inputAlign: "left",
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    config: Widget.getPropertyPaneConfig(),
  },
};

export default Widget;
