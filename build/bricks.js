import * as _compiler from "@klevn/jxc";
import * as compiler from "@klevn/jxc";
_compiler.appendStyleBundel(`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap");@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");html{font-size:20px}body,html{font-family:Inter,sans-serif;margin:0;overflow-x:hidden;padding:0;position:relative}*{box-sizing:border-box;margin:0}a,p{font-size:1rem;font-weight:400;letter-spacing:-1.5%;line-height:30px}a{color:inherit;text-decoration:underline}h1{font-size:5.5rem}h1,h2{font-weight:400}h2{font-size:2.5rem}h3{font-size:1.3rem;font-weight:500}input,textarea{border:1px solid silver;box-sizing:border-box;font-family:Inter,sans-serif;font-size:1rem;font-weight:400!important;outline:none;padding:.5rem .7rem;resize:none;width:100%}input:focus,textarea:focus{border:1px solid #000}`);
function createBrickStyles(props, direction) {
  const fixedStyles = {};
  if (props.fixed) {
    fixedStyles["width"] = "100%";
    switch (props.fixed) {
      case "top":
        fixedStyles["position"] = "fixed";
        fixedStyles["top"] = "0";
        break;
      case "bottom":
        fixedStyles["position"] = "fixed";
        fixedStyles["bottom"] = "0";
        break;
      case "left":
        fixedStyles["position"] = "fixed";
        fixedStyles["left"] = "0";
        break;
      case "right":
        fixedStyles["position"] = "fixed";
        fixedStyles["right"] = "0";
        break;
      case "center":
        fixedStyles["position"] = "fixed";
        fixedStyles["top"] = "50%";
        fixedStyles["left"] = "50%";
        fixedStyles["transform"] = "translate(-50%, -50%)";
        break;
    }
  }
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
    "font-size": `${props.fontSize}rem`,
    "color": props.fontColor,
    ...fixedStyles,
    ...(props.styles ?? {})
  };
}
function HorizontalBrick(props) {
  const styles = createBrickStyles(props, "row");
  return compiler.factory(props.tag ?? "div", {
    style: styles,
    ...props.attributes
  }, props.children);
}
function VerticalBrick(props) {
  const styles = createBrickStyles(props, "column");
  return compiler.factory(props.tag ?? "div", {
    style: styles,
    ...props.attributes
  }, props.children);
}
export default function createLayout(defaultLayoutStyles) {
  function componentWrapper(component, defaultProps) {
    return props => {
      return component({
        ...defaultProps,
        ...props
      });
    };
  }
  return {
    Horizontal: componentWrapper(HorizontalBrick, defaultLayoutStyles),
    Vertical: componentWrapper(VerticalBrick, defaultLayoutStyles)
  };
}