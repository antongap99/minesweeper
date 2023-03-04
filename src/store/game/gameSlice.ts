import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IState {
    firstClick: boolean,
    isGameOver: boolean,
    isGameWin: boolean,
}

const initialState:IState = {
    firstClick: true,
    isGameOver: false,
    isGameWin: false,
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
        }

    }
})

export default gameSlice.reducer;

export const gameActions =  gameSlice.actions