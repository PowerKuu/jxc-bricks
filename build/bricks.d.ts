/// <reference types="@klevn/jxc/src/types/jsx" />
import "./global.css";
type LayoutProps = {
    children?: JSX.Children | JSX.Children[];
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
    Horizontal: (props: LayoutProps) => any;
    Vertical: (props: LayoutProps) => any;
};
export {};
