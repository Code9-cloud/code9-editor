import UIBaseComponent from "./UIBaseComponent";
import UIStyle from "./UIStyle";

export interface UIComponent {
}

export class UIComponent<T extends UIBaseComponent = UIBaseComponent, U extends UIStyle = UIStyle> extends UIBaseComponent<U> {
}