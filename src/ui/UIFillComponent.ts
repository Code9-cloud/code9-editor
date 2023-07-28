import {UIComponent} from "./UIComponent";
import {UIBgStyle} from "./UIStyle";
import UIBaseComponent from "./UIBaseComponent";
import UIComponentWithBackground from "./UIComponentWithBackground";

// There should be a similar FullContainerComponent that fills whole container or maybe dynamic container with width & height set to 100%
export class UIFillComponent<T extends UIBaseComponent = UIBaseComponent, U extends UIBgStyle = UIBgStyle> extends UIComponentWithBackground<T,U>{
    child: UIComponent;
    has_child: boolean = false;
    constructor(width: number, height: number, style: U) {
        super(style);
        this.size.width = width;
        this.size.height = height;
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
        super.draw();
        if(this.has_child){
            this.child.draw();
        }
    }

    redraw() {
        this.clear();
        super.redraw();
        this.draw();
    }

    clear() {
        if(this.has_child){
            this.child.clear();
        }
        super.clear();
    }
}