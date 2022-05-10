import { Element, LazyExoticComponent } from "react";

export type TJSXComponent = () => JSX.Element;

export interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<TJSXComponent> | TJSXComponent | Element;
  name: string;
}
