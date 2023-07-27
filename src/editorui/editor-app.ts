import UIApp from "../ui/UIApp";
import {UIFillComponent} from "../ui/UIFillComponent";
import UIStyle from "../ui/UIStyle";

export default class EditorApp extends UIApp{
    width: number;
    height: number;
    constructor(window: Window) {
        super();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.app.renderer.resize(this.width, this.height);
        (this.app.view as HTMLCanvasElement).style.position = 'absolute';
        (this.app.view as HTMLCanvasElement).style.display = 'block';
        let fullscreen_wrapper = new UIFillComponent(this.width, this.height, new UIStyle('#0000ff'));
        // fullscreen_wrapper.registerEvents();
        this.setRoot(fullscreen_wrapper);
    }

    registerEvents() {
        window.addEventListener('resize' , _ => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.app.renderer.resize(window.innerWidth, window.innerHeight);
            (this.root as UIFillComponent).resize(this.width, this.height);
            this.root.redraw();
        })
    }
}