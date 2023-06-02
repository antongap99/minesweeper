export interface IArrayWithKeys {
  key: string;
  bomb: boolean;
  сoordinates: number[];
  value: number;
  open: boolean;
  picked: boolean;
}


export interface IShuffledTiles {
  tilesJSX: JSX.Element[];
  copeTyles: IArrayWithKeys[];
}