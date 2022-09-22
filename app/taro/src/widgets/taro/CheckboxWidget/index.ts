import Widget from "./widget";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "复选框",
  iconSVG: null,
  needsMeta: true,
  isCanvas: false,
  isMobile: true,
  defaults: {
    widgetName: "checkbox",
    rows: 4,
    columns: 16,
    version: 1,
    label: "勾选",
    defaultCheckedState: true,
    isDisabled: false,
    showLoading: false,
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    config: Widget.getPropertyPaneConfig(),
  },
};

export default Widget;
