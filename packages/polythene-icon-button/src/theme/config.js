import { vars } from "polythene-theme";
import { buttonConfig } from "polythene-button";

const padding = (vars.grid_unit_icon_button - vars.unit_icon_size) / 2; // 12
const padding_compact = (vars.grid_unit_icon_button - vars.unit_icon_size) / 3; // 8

export default Object.assign(
  {},
  buttonConfig,
  {
    padding,
    padding_compact,

    color_light_wash_opacity: vars.blend_light_background_hover_medium,
    color_light_focus_opacity: vars.blend_light_background_hover_medium,
    color_light_flat_normal_text: vars.rgba(vars.color_light_foreground, vars.blend_light_text_secondary),

    color_dark_wash_opacity: vars.blend_dark_background_hover_medium,
    color_dark_focus_opacity: vars.blend_dark_background_hover_medium,
    color_dark_flat_normal_text: vars.rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary)
  }
);
