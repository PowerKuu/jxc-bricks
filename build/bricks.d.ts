/// <reference types="@klevn/jxc/src/types/jsx" />
import "./global.css";
type LayoutProps = {
    tag?: keyof JSX.IntrinsicElements;
    children?: JSX.Children | JSX.Children[];
    justify?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly";
    align?: "start" | "end" | "center" | "stretch";
    gap?: number;
    horizontalPadding?: number;
    verticalPadding?: number;
    backgroundColor?: string;
    borderRadius?: number;
    attributes?: JSX.Attributes;
    fixed?: "top" | "bottom" | "left" | "right" | "center";
};
export default function createLayout(defaultLayoutStyles?: LayoutProps): {
    Horizontal: (props: LayoutProps) => any;
    Vertical: (props: LayoutProps) => any;
};
export {};
