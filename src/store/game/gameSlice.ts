import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BOMBS } from '../../const/const'


interface IState {
    firstClick: boolean,
    isGameOver: boolean,
    isGameWin: boolean,
    bombCount: number
}

const initialState:IState = {
    firstClick: true,
    isGameOver: false,
    isGameWin: false,
    bombCount: BOMBS,
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
        },
        updateBomb: (state, action: PayloadAction<number>) => {
            state.bombCount = action.payload
        },
    }
})

export default gameSlice.reducer;

export const gameActions =  gameSlice.actions






// const initialTime = {
//     seconds: 0,
//     start_time: 0,
//     status: 'paused',
//     decrement_interval: 0
// }

// const countdownTimer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'START_TIMER':
//             return Object.assign(
//                 {},
//                 state,
//                 {
//                     start_time: action.start_time,
//                     seconds: action.start_time,
//                     status: 'counting down'
//                 }
//             );
//         case 'STOP_TIMER':
//             return Object.assign(
//                 {},
//                 state,
//                 { status: 'paused' }
//             );
//         case 'TICK':
//             return Object.assign(
//                 {},
//                 state,
//                 { seconds: (state.seconds - .01).toFixed(2) }
//             );
//         default:
//             return state;
//     }
// }

// const store = Redux.createStore(countdownTimer);