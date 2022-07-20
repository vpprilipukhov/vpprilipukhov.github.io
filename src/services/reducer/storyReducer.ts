import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface storyState{
    storyMod: boolean
    bigGame: boolean
}

const initialState: storyState = {
    storyMod: false,
    bigGame: false

}

export const storySlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        setMod(state){
            state.storyMod = true
        },

        offMod(state){
            state.storyMod = false
        },

        setModBigGame(state){
            state.bigGame = true
        },

        offModBigGame(state){
            state.bigGame = false
        }

    }
})



export default storySlice.reducer