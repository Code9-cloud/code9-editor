export default class UIStyle {
    bgColor?: string;

    constructor(props?: any) {
        if(props) {
            if (props.bgColor) {
                this.bgColor = props.bgColor;
            }
        }
    }
}

export class UIBgStyle extends UIStyle{
    bgColor: string;
    constructor(props?: any) {
        super(props);
        if(!this.bgColor){
            this.bgColor = '#000000';
        }
    }
}