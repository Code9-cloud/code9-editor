import UIBaseComponent from "./UIBaseComponent";
import {UIBgStyle} from "./UIStyle";
import {UIComponent} from "./UIComponent";
import * as PIXI from 'pixi.js';

export default class UIComponentWithBackground<T extends UIBaseComponent = UIBaseComponent, U extends UIBgStyle = UIBgStyle> extends UIComponent<T, U> {
    bg: PIXI.Graphics;
    constructor(style?: U) {
        super(style);
        if(!style) {
            this.style = new UIBgStyle();
        }
        this.bg = new PIXI.Graphics();
        this.container.addChild(this.bg);
    }

    draw() {
        super.draw();
        this.bg.beginFill(this.style.bgColor);
        this.bg.drawRect(0, 0, this.size.width, this.size.height);
        this.bg.endFill();
    }

    clear() {
        this.bg.clear();
        super.clear();
    }

    redraw() {
        this.clear();
        this.draw();
    }
}