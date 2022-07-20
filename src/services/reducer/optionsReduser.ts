import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface options {
    numberSub: number
    timer: number
    way: string
    jump: number
    x: number
    y: number
}

const initialState: options = {

    timer: 800,
    numberSub: 10,
    way: 'easy',
    jump: 1,
    x: 4,
    y: 4,

}


export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {

        setJump(state){
            state.jump += 1
        },


        setTimer(state, action: PayloadAction<number>){
            state.timer = action.payload

        },

        setXY(state, action: PayloadAction<{ x: number, y: number }>){
            state.x = action.payload.x
            state.y = action.payload.y

        },

        setNSub(state, action: PayloadAction<number>){
          state.numberSub = action.payload

        },

        setWayEasy(state){
            state.way = 'easy'
        },

        setWayJump(state){
            state.way = 'wayJump'
        }







    }
})


export default optionsSlice.reducer