import { HEIGHT, WIDTH } from "../const/const";
import { IShuffledTiles } from "./interfaces";

export const generatRandomId = () =>
  Math.random().toString(36).substring(2, 8) +
  Date.now().toString().substring(9);

export const isValidCoordinates = (row: number, col: number) => {
  return row >= 0 && row < WIDTH && col >= 0 && col < HEIGHT;
};


export const countOpenedTiles = (tiles:IShuffledTiles):number => {
  return tiles.copeTyles.reduce((bombs, tile) => {
    if ((tile.picked || tile.open) && !tile.bomb) {
      return bombs + 1
    } else {
      return bombs
    }
  }, 0)
}

