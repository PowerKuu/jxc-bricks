/// <reference types="@klevn/jxc/src/types/jsx" />
type LayoutProps = {
    children?: JSX.Element[];
    justify?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly";
    align?: "start" | "end" | "center" | "stretch";
    gap?: number;
    horizontalPadding?: number;
    verticalPadding?: number;
    backgroundColor?: string;
    borderRadius?: number;
    attributes?: JSX.Attributes;
};
export default function createLayout(defaultLayoutStyles?: LayoutProps): {
    HorizontalBrick: (props: LayoutProps) => JSX.Element;
    VerticalBrick: (props: LayoutProps) => JSX.Element;
};
export {};
