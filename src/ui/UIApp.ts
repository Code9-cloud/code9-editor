// Make Generic, not tied to window etc
export default class UIApp {
    canvas: any;
    constructor(canvas) {
        this.canvas = canvas;
    }
}