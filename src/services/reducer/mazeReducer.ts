import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const alfConst = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

interface mazeState {
    maze: string[][]
    alf: string[]


}

const initialState: mazeState = {
    maze: [],
    alf: alfConst,


}

export const mazeSlice = createSlice({
    name: 'maze',
    initialState,
    reducers: {


        generationMaze(state, action: PayloadAction<{ x: number, y: number }>) {
            const maze: string[][] = []

            for (let i = 0; i < action.payload.x; i++) {
                let subArray: string[] = []
                for (let j = 0; j < action.payload.y; j++) {
                    if (i === 0 && j === 0) {
                        subArray.push('9')
                    } else if (i === 0) {
                        subArray.push('8')
                    } else if (j === 0) {
                        subArray.push('7')
                    } else {
                        subArray.push('1')
                    }
                }
                maze.push(subArray)
            }

            state.maze = maze

        },


    }
})

export default mazeSlice.reducer