type LayoutProps = {
    children?: JSX.Element[], 
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

    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

function VerticalBrick(props:LayoutProps) {
    const styles = createBrickStyles(props, "column")

    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default function createLayout(defaultLayoutStyles?:LayoutProps) {
    return {
        HorizontalBrick: (...props: Parameters<typeof HorizontalBrick>) => HorizontalBrick({
            ...defaultLayoutStyles ?? {}, 
            ...props
        }),
        VerticalBrick: (...props: Parameters<typeof VerticalBrick>) => VerticalBrick({
            ...defaultLayoutStyles ?? {}, 
            ...props
        }),
    }
}