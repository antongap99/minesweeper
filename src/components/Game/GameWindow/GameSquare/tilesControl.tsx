
import { HEIGHT, WIDTH } from "../../../../const/const"
import { Tile } from "./Tile/Tile"

interface IArrayWithKeys {
    key: string,
    bomb: boolean
    сoordinates: number[]
    value: number
    open: boolean
    picked: boolean
}



export const generatRandomId = () =>
    Math.random().toString(36).substring(2, 8) +
    Date.now().toString().substring(9);

export const    searchSaveTile = (array: IArrayWithKeys[], coordinates: number): number => {
    return array.findIndex((item, idx) => !item.bomb && idx !== coordinates);
}

const isValidCoordinates = (row: number, col: number) => {
    return row >= 0 && row < WIDTH && col >= 0 && col < HEIGHT
}


const createTilesJSX = (arr: IArrayWithKeys[], over: boolean) => {
    const tilesJSX = [];
    // создаю массив компонентов
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].bomb) {
            tilesJSX.push(
                <Tile
                    key={arr[i].key}
                    bomb={true}
                    coordinates={arr[i].сoordinates}
                    over={over}
                    index={i}
                    open={arr[i].open}
                    picked={arr[i].picked}
                />
            )
        } else {
            tilesJSX.push(
                <Tile
                    key={arr[i].key}
                    bomb={false}
                    coordinates={arr[i].сoordinates}
                    nearByBombs={arr[i].value}
                    open={arr[i].open}
                    over={over}
                    index={i}
                    picked={arr[i].picked}
                />
            )
        }
    }
    return tilesJSX
}

const addBombs = (width: number, height: number, bombs: number) => {
    let counter = 0
    const arrWithBombs: IArrayWithKeys[] = []
    for (let i = 0; i < width * height; i++) {
        if (counter < bombs) {
            arrWithBombs.push({ key: generatRandomId(), bomb: true, сoordinates: [], value: 0, open: false, picked: false })
            counter++
        } else {
            arrWithBombs.push({ key: generatRandomId(), bomb: false, сoordinates: [], value: 0, open: false, picked: false })
        }
    }

    return arrWithBombs
}

const addCoordinates = (arr: IArrayWithKeys[], width: number) => {
    const tilesWithCoordinates = Array.from(arr);
    for (let i = 0; i < tilesWithCoordinates.length; i++) {
        const col = i % width;
        const row = Math.floor(i / width);
        tilesWithCoordinates[i].сoordinates.push(row, col)
    }

    return tilesWithCoordinates
}

const firstClickGuard = (arr: IArrayWithKeys[], index: number) => {
    const tiles = Array.from(arr);
    for (let i = 0; i < tiles.length; i++) {
        if (i === index && tiles[i].bomb) {
            const inx = searchSaveTile(tiles, i);
            tiles[inx].bomb = true
            tiles[index].bomb = false
        }
    }

    return tiles
}

export interface ShuffleTiles {
    tilesJSX: JSX.Element[],
    copeTyles: IArrayWithKeys[]
}



export const createAndshuffleTiles = (
    width: number,
    height: number,
    bombs: number,
    firstClick: boolean,
    over?: boolean,
    index?: number,
): ShuffleTiles => {

    if (!over) over = false
    // расставляю бомбы и ключи
    const arrWithBombs = addBombs(width, height, bombs)

    // сортирую
    arrWithBombs.sort(() => Math.random() - 0.5)

    // добавляю координаты
    const tilesWithCoordinates = addCoordinates(arrWithBombs, width)


    //  первое нажатие (переставлю бомбу на первую безопасную ячейку)
    let tiles: IArrayWithKeys[] = []
    if (index && firstClick) {
        tiles = firstClickGuard(tilesWithCoordinates, index)
    } else {
        tiles = tilesWithCoordinates
    }


    //  расставлю цифры
    const putNumber = (row: number, col: number) => {

        const idx = row * width + col;
        if (!isValidCoordinates(row, col)) return;
        tiles[idx].value += 1
    }

    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].bomb) {
            const [row, col] = tiles[i].сoordinates
            putNumber(row - 1, col)
            putNumber(row + 1, col)
            putNumber(row + 1, col + 1)
            putNumber(row - 1, col - 1)
            putNumber(row - 1, col + 1)
            putNumber(row + 1, col - 1)
            putNumber(row, col + 1)
            putNumber(row, col - 1)
        }
    }

    const tilesJSX = createTilesJSX(tiles, over)

    return {
        tilesJSX,
        copeTyles: tiles
    };
}




// todo переделать в двумерный массив
export const openTiles = (
    copyArr: IArrayWithKeys[],
    index: number,
    width: number,
    height: number,
    firstClick: boolean,
    over: boolean,
): ShuffleTiles => {

    const open = (row: number, col: number) => {
        const idx = row * width + col;
        if (!isValidCoordinates(row, col)) return
        if (newTilesArr[idx].open) return

        if (newTilesArr[idx].value !== 0) {
            newTilesArr[idx].open = true;
            return
        }

        newTilesArr[idx].open = true
        open(row + 1, col);
        open(row - 1, col);
        open(row, col + 1);
        open(row, col - 1);
        open(row - 1, col - 1);
        open(row + 1, col - 1);
        open(row - 1, col + 1);
        open(row + 1, col + 1);
    }
    let newTilesArr: IArrayWithKeys[] = []



    if (firstClick) {
        newTilesArr = Array.from(firstClickGuard(copyArr, index));
        newTilesArr[index].picked = true
        newTilesArr.forEach(tile => tile.value = 0)
        const putNumber = (row: number, col: number) => {
            const idx = row * width + col;
            if (!isValidCoordinates(row, col)) return;
            newTilesArr[idx].value += 1
        }

        for (let i = 0; i < newTilesArr.length; i++) {
            if (newTilesArr[i].bomb) {
                const [row, col] = newTilesArr[i].сoordinates
                putNumber(row - 1, col)
                putNumber(row + 1, col)
                putNumber(row + 1, col + 1)
                putNumber(row - 1, col - 1)
                putNumber(row - 1, col + 1)
                putNumber(row + 1, col - 1)
                putNumber(row, col + 1)
                putNumber(row, col - 1)
            }
        }
    } else {
        newTilesArr = Array.from(copyArr);
        newTilesArr[index].picked = true
    }






    const [row, col] = newTilesArr[index].сoordinates
    open(row, col)



    // создание компонентов
    const tilesJSX = createTilesJSX(newTilesArr, over)


    return {
        tilesJSX,
        copeTyles: newTilesArr
    }
}



export const pickedTiles = (
    copyArr: IArrayWithKeys[],
    index: number,
    over: boolean): ShuffleTiles => {

    const newTilesArr = Array.from(copyArr);

    newTilesArr[index].picked = true;

    const tilesJSX = createTilesJSX(newTilesArr, over)

    return {
        tilesJSX,
        copeTyles: newTilesArr
    }
}


export const isWin = (
    tiles: IArrayWithKeys[],
    bombs: number
) => {
    let count: number = 0
    tiles.forEach((tile) => {
        if (tile.picked && tile.bomb){
            count++
        }
    })
    console.log(count);
    if (count === bombs) {
        return true
    } else {
        return false
    }
}