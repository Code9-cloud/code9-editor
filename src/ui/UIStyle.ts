export default class UIStyle {
    bgColor?: string;

    constructor(bgColor?: string) {
        if(bgColor) {
            this.bgColor = bgColor;
        }
    }
}