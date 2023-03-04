import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BOMBS, TIME } from '../../const/const'


interface IState {
    firstClick: boolean,
    isGameOver: boolean,
    isGameWin: boolean,
    bombCount: number
    time:number
}

const initialState:IState = {
    firstClick: true,
    isGameOver: false,
    isGameWin: false,
    bombCount: BOMBS,
    time: TIME
}

export const gameSlice = createSlice({
    name: 'game ',
    initialState,
    reducers: {
        updateGameOver: (state, action: PayloadAction<boolean>) => {
            state.isGameOver = action.payload
        },
        updateGameWin: (state, action: PayloadAction<boolean>) => {
            state.isGameWin = action.payload
        },
        updateFirstClick: (state, action: PayloadAction<boolean>) => {
            state.firstClick = action.payload
        },
        UpdateGame: (state, action: PayloadAction<IState>) => {
            state.firstClick = action.payload.firstClick
            state.isGameOver = action.payload.isGameOver
            state.isGameWin = action.payload.isGameWin
            state.bombCount = action.payload.bombCount
            state.time = action.payload.time
        },
        updateBomb: (state, action: PayloadAction<number>) => {
            state.bombCount = action.payload
        },
        updateTime: (state, action: PayloadAction<number>) => {
            state.time = action.payload
        },

    }
})

export default gameSlice.reducer;

export const gameActions =  gameSlice.actions