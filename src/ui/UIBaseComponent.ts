import {UIPoint, UISize} from "./UICommons";
import * as PIXI from 'pixi.js';

export default abstract class UIBaseComponent {
    parent: PIXI.Container;
    container: PIXI.Container;
    position: UIPoint;
    size: UISize;

    constructor(){};

    draw(){};
    clear(){};
    redraw(){};
    registerEvents(){};
}