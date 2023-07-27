import {UIComponent} from "./UIComponent";
import UIStyle from "./UIStyle";
import * as PIXI from 'pixi.js';

// There should be a similar FullContainerComponent that fills whole container or maybe dynamic container with width & height set to 100%
export class UIFillComponent extends UIComponent{
    child: UIComponent;
    has_child: boolean = false;
    bg_rect: PIXI.Graphics;
    constructor(width: number, height: number, style?: UIStyle) {
        super(style);
        this.size.width = width;
        this.size.height = height;
        this.bg_rect = new PIXI.Graphics();
        this.container.addChild(this.bg_rect);
    }

    resize(width:number, height:number) {
        this.size.width = width;
        this.size.height = height;
        this.redraw();
    }

    registerEvents() {
        // this.window.addEventListener('resize', (_e) => {
        //     this.resize(window.innerWidth, window.innerHeight);
        // });
    }

    setChild<T extends UIComponent>(child:T) {
        if(this.has_child == false) {
            this.child = child;
            this.has_child = true;
        }
    }

    draw() {
        this.bg_rect.beginFill(this.style.bgColor);
        this.bg_rect.drawRect(0, 0, this.size.width, this.size.height);
        this.bg_rect.endFill();
    }

    redraw() {
        this.clear();
        this.bg_rect.beginFill(this.style.bgColor);
        this.bg_rect.drawRect(0, 0, this.size.width, this.size.height);
        this.bg_rect.endFill();
        if(this.has_child == true){
            this.child.redraw();
        }
    }

    clear() {
        this.bg_rect.clear();
    }
}