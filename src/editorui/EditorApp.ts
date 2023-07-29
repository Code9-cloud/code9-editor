import UIApp from "../ui/UIApp";
import {UIBgStyle} from "../ui/UIStyle";
import EditorComponent from "./EditorComponent";

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
        // let fullscreen_wrapper = new UIFillComponent(this.width, this.height, new UIBgStyle({bgColor: '#0000ff'}));
        // fullscreen_wrapper.registerEvents();
        let editor_comp = new EditorComponent(this.width, this.height, new UIBgStyle());
        this.setRoot(editor_comp);
    }

    registerEvents() {
        window.addEventListener('resize' , _ => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.app.renderer.resize(window.innerWidth, window.innerHeight);
            (this.root as EditorComponent<UIBgStyle>).resize(this.width, this.height);
            this.root.redraw();
        });
    }
}