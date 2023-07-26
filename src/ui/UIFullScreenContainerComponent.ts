import {UIComponent} from "./UIComponent";

export class UIFullScreenContainerComponent extends UIComponent{
    child: UIComponent;
    has_child: boolean = false;
    constructor(window: Window) {
        super();
        this.size.width = window.innerWidth;
        this.size.height = window.innerHeight;
    }

    resize(width:number, height:number) {
        this.size.width = width;
        this.size.height = height;
        this.redraw();
    }

    registerEvents() {
        window.addEventListener('resize', (_e) => {
            this.resize(window.innerWidth, window.innerHeight);
        });
    }

    setChild<T extends UIComponent>(child:T) {
        if(this.has_child == false) {
            this.child = child;
            this.has_child = true;
        }
    }

    redraw() {
        if(this.has_child == true){
            this.child.redraw();
        }
    }
}