export interface IPosition {
    x: number;
    y: number;
}

export class UISize {
    width: number;
    height: number;
}

export class UIPoint implements IPosition {
    x: number;
    y: number;
}