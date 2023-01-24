"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLayout;
var _compiler = require("@klevn/jxc");
function createBrickStyles(props, direction) {
  return {
    "display": "flex",
    "flex-direction": direction,
    "justify-content": props.justify,
    "align-items": props.align,
    "gap": props.gap ? `${props.gap}rem` : undefined,
    "padding-left": props.horizontalPadding ? `${props.horizontalPadding}rem` : undefined,
    "padding-right": props.horizontalPadding ? `${props.horizontalPadding}rem` : undefined,
    "padding-top": props.verticalPadding ? `${props.verticalPadding}rem` : undefined,
    "padding-bottom": props.verticalPadding ? `${props.verticalPadding}rem` : undefined,
    "border-radius": props.borderRadius ? `${props.borderRadius}rem` : undefined,
    "background-color": props.backgroundColor,
    ...props.attributes
  };
}
function HorizontalBrick(props) {
  const styles = createBrickStyles(props, "row");
  return _compiler.factory("div", {
    style: styles
  }, props.children);
}
function VerticalBrick(props) {
  const styles = createBrickStyles(props, "column");
  return _compiler.factory("div", {
    style: styles
  }, props.children);
}
function createLayout(defaultLayoutStyles) {
  return {
    HorizontalBrick: (...props) => HorizontalBrick({
      ...(defaultLayoutStyles ?? {}),
      ...props
    }),
    VerticalBrick: (...props) => VerticalBrick({
      ...(defaultLayoutStyles ?? {}),
      ...props
    })
  };
}