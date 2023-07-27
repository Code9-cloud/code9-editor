export interface IPosition {
    x: number;
    y: number;
}

export class UISize {
    width: number;
    height: number;
    constructor(width: number = 0, height: number = 0) {
        this.width = width;
        this.height = height;
    }
}

export class UIPoint implements IPosition {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
}