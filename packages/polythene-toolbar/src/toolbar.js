import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";

export const classes = {
  component:        "pe-toolbar",
  compact:          "pe-toolbar--compact",
  title:            "pe-toolbar__title",
  indentedTitle:    "pe-toolbar__title--indent",
};

const view = vnode => {
  const attrs = vnode.attrs;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.compact ? classes.compact : null,
        attrs.class
      ].join(" ")
    },
    attrs.events ? attrs.events : null
  );
  const content = attrs.content
    ? attrs.content
    : attrs.children || vnode.children;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const toolbar = {
  theme: customTheme, // accepts (selector, vars)
  view
};