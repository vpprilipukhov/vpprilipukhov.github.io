import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {playersPlay} from "../../additionally/variables/variable";


const guides = [
    'up',
    'right',
    'down',
    'left'


]

interface panelState {
    whoSub: number
    arraySub: string[]
    iSub: number
    startOne: { y: number, x: number }
    nextOne: { y: number, x: number }

    startTwo: { y: number, x: number }
    nextTwo: { y: number, x: number }


}

const initialState: panelState = {
    arraySub: [],
    iSub: -2,
    startOne: {y: 0, x: 0},
    nextOne: {y: 0, x: 0},
    startTwo: {y: 0, x: 0},
    nextTwo: {y: 0, x: 0},
    whoSub: 1


}


export const subPanelSlice = createSlice({
    name: 'subPanel',
    initialState,
    reducers: {

        setNewLvl(state) {
            state.iSub = -2
            state.arraySub = []
            state.startOne = {y: 0, x: 0}
            state.nextOne = {y: 0, x: 0}
            state.startOne= {y: 0, x: 0}
            state.nextOne= {y: 0, x: 0}
        },

        getStartOne(state, action: PayloadAction<{ y: number, x: number }>) {
            state.startOne = {y: action.payload.y, x: action.payload.x}
        },

        getStartTwo(state, action: PayloadAction<{ y: number, x: number }>) {
            state.startTwo = {y: action.payload.y, x: action.payload.x}
        },

        getNextOne(state, action: PayloadAction<{ y: number, x: number }>) {
            state.nextOne = {y: action.payload.y, x: action.payload.x}
        },

        getNextTwo(state, action: PayloadAction<{ y: number, x: number }>) {
            state.nextTwo = {y: action.payload.y, x: action.payload.x}

        },


        setSubArray(state, action: PayloadAction<{ guides: string, two: boolean }>) {
            let newArray = state.arraySub
            let guides = ''
            if (state.whoSub === 1) {
                guides = action.payload.guides + "-blue"
            }
            if (state.whoSub === 2) {
                guides = action.payload.guides + "-purple"
            }


            newArray[state.iSub] = guides
            if (state.iSub < state.arraySub.length - 1) {
                state.arraySub = newArray
                if ((state.iSub) > 0) {
                    newArray[state.iSub - 1] = newArray[state.iSub - 1].split('-')[0]
                    state.arraySub = newArray
                }

                state.iSub += 1
            }

            if (action.payload.two) {
                if ((state.whoSub) === 1) {
                    state.whoSub = 2
                } else {
                    state.whoSub = 1
                }
            }


        },


        setterISub(state) {
            state.iSub += 1
        }
        ,

        generation(state, action: PayloadAction<number>) {

            for (let i = 0; i < action.payload; i++) {
                state.arraySub.push('normal')
            }


        }
    }
})

export default subPanelSlice.reducer