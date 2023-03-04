import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Emojies } from '../../types/smileType'




interface IStateSmile {
    emoji: Emojies
}

const initialState: IStateSmile = {
    emoji: Emojies.Smile
}

export const smileSlice = createSlice({
    name: 'smile',
    initialState,
    reducers: {
        updateSmile: (state, action: PayloadAction<Emojies>) => {
            state.emoji = action.payload
        }
    }
})

export default smileSlice.reducer;

export const smileActions = smileSlice.actions