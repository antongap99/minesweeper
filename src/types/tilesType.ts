export interface ShuffleTiles {
    tilesJSX: JSX.Element[],
    copeTyles: IArrayWithKeys[]
}

export interface IArrayWithKeys {
    key: string,
    bomb: boolean
    сoordinates: number[]
    value: number
    open: boolean
    picked: boolean
}