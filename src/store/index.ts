import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './game/gameSlice'
import tilesReducer from './tiles/tilesSlice'

export const store = configureStore({
    reducer: {
        game: gameReducer,
        tiles: tilesReducer
    },
    middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat() // concat() для моего мидлваре
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch