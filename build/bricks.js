import * as _compiler from "@klevn/jxc";
_compiler.appendStyleBundel(`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap");@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");html{font-size:20px}body,html{font-family:Inter,sans-serif;margin:0;overflow-x:hidden;padding:0;position:relative}*{box-sizing:border-box;margin:0}a,p{font-size:1rem;font-weight:400;letter-spacing:-1.5%;line-height:30px}a{color:inherit;text-decoration:underline}h1{font-family:Questrial,sans-serif;font-size:5.5rem}h1,h2{font-weight:400}h2{font-size:2.5rem}h3{font-size:1.3rem;font-weight:500}input,textarea{border:1px solid silver;box-sizing:border-box;font-family:Inter,sans-serif;font-size:1rem;font-weight:400!important;outline:none;padding:.5rem .7rem;resize:none;width:100%}input:focus,textarea:focus{border:1px solid #000}`);
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