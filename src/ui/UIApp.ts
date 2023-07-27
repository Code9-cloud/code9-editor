import * as PIXI from 'pixi.js';
import {UIComponent} from "./UIComponent";

// Make Generic, not tied to window etc
export default class UIApp {
    app: PIXI.Application;
    root: UIComponent;
    has_root: boolean = false;
    constructor() {
        this.app = new PIXI.Application();
        this.app.renderer = PIXI.autoDetectRenderer({
            antialias: true,
            resolution: 1,
            autoDensity: true,
        });
    }

    setRoot(root: UIComponent) {
        if(this.has_root == false){
            this.root = root;
            this.app.stage.addChild(this.root.container);
            this.root.parent = this.app.stage;
            this.has_root = true;
        }
    }

    draw() {
        this.root.draw();
    }

    clear() {
        this.root.clear();
    }

    redraw() {
        this.root.redraw();
    }
}