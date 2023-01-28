import * as compiler from "@klevn/jxc"
import "./global.css"

type LayoutProps = {
    tag?: keyof JSX.IntrinsicElements,
    children?: JSX.Children | JSX.Children[], 
    justify?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly",
    align?: "start" | "end" | "center" | "stretch",
    gap?: number,
    horizontalPadding?: number,
    verticalPadding?: number,

    backgroundColor?: string,
    borderRadius?: number,

    attributes?: JSX.Attributes
}


function createBrickStyles(props:LayoutProps, direction: "row" | "column") {
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
    }
}

function HorizontalBrick(props:LayoutProps) {
    const styles = createBrickStyles(props, "row")

    return compiler.factory(props.tag ?? "div", {
        style: styles,
    }, props.children as JSX.Children)
}

function VerticalBrick(props:LayoutProps) {
    const styles = createBrickStyles(props, "column")

    return compiler.factory(props.tag ?? "div", {
        style: styles,
    }, props.children as JSX.Children)
}

export default function createLayout(defaultLayoutStyles?:LayoutProps) {
    function componentWrapper<T extends (...args:any) => any>(component:T, defaultProps: any) {
        return (props:Parameters<typeof component>[0]) => {
            return component({
                ...defaultProps,
                ...props
            })
        }       
    }
    return {
        Horizontal: componentWrapper(HorizontalBrick, defaultLayoutStyles),
        Vertical: componentWrapper(VerticalBrick, defaultLayoutStyles),
    }
}