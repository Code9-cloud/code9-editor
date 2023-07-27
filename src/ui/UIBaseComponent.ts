import {UIPoint, UISize} from "./UICommons";
import * as PIXI from 'pixi.js';
import UIStyle from "./UIStyle";

export default abstract class UIBaseComponent<T extends UIStyle = UIStyle> {
    parent: PIXI.Container;
    container: PIXI.Container;
    position: UIPoint = new UIPoint();
    size: UISize = new UISize();
    style: UIStyle = new UIStyle();

    constructor(style?: T){
        if(style) {
            this.style = style;
        }
        this.container = new PIXI.Container();
    };

    draw(){};
    clear(){};
    redraw(){};
    registerEvents(){};
}