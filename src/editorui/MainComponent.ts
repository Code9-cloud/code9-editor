import {UIFillComponent} from "../ui/UIFillComponent";
import {UIBgStyle} from "../ui/UIStyle";

export default class MainComponent extends UIFillComponent {
    constructor(width:number, height: number, style?: UIBgStyle) {
        super(width, height, style);
    }
}