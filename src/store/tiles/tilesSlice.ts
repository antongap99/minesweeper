import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createShuffledTiles } from '../../control/tilesControl'
import { BOMBS, HEIGHT, WIDTH } from '../../const/const'
import { IArrayWithKeys } from '../../types/tilesType'

interface IStateTiles {
    tiles: IArrayWithKeys[],
    isBombsShow: boolean
}

const initialState: IStateTiles = {
    tiles: createShuffledTiles(WIDTH, HEIGHT, BOMBS, false),
    isBombsShow: false
}

export const tilesSlice = createSlice({
    name: 'tiles',
    initialState,
    reducers: {
        createTiles: (state, action: PayloadAction<IArrayWithKeys[]>) => {
            state.tiles = action.payload
        },
        updateTiles: (state, action: PayloadAction<IArrayWithKeys[]>) => {
            state.tiles = action.payload
        },
        showTilesWithBomb: (state, action: PayloadAction<boolean>) => {
            state.isBombsShow = action.payload
        },
    }
})

export default tilesSlice.reducer;

export const tilesActions = tilesSlice.actions