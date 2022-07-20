import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {playersPlay, playersStatus} from "../../additionally/variables/variable";


interface players {

    who: number

    twoPlayer: boolean

    statusOne: string
    statusTwo: string

    choiceOne: string
    choiceTwo: string

    YXOne: string
    YXTwo: string

    hpOne: string[]
    hpTwo: string[]

    scoreOne: number
    scoreTwo: number

    buff: {name: string, n: number}[]

}

const initialState: players = {
    who: 1,
    statusOne: playersStatus.await,
    statusTwo: playersStatus.await,

    choiceOne: playersPlay.await,
    choiceTwo: playersPlay.await,

    hpOne: ['hp','hp','hp'],
    hpTwo: ['hp','hp','hp'],


    YXOne: '',
    YXTwo: '',

    scoreOne: 0,
    scoreTwo: 0,

    twoPlayer: false,
    buff:[]



}

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {

        setset(state){

            state.twoPlayer = true
        },

        setBuff(state){
            state.buff = [{name: 'ускорение', n: 1},{name: 'прыжок', n:1},{name: 'больше блоков', n:1}]
            state.twoPlayer = true
        },

        setOnePlayerAwait(state){
            state.statusOne =playersStatus.await
        },

        setTwoPlayers(state){
            state.twoPlayer = true
        },

        setChoose(state){
            if (state.who === 1) {
                state.statusOne = playersStatus.choose

            }
            if (state.who === 2) {
                state.statusTwo = playersStatus.choose
            }

        },

        setChooseTwo(state){
            state.statusOne = playersStatus.choose
        },



        setChooseOne(state){
            state.statusOne = playersStatus.choose
        },


        setYX(state, action: PayloadAction<string>){
            if (state.who === 1) {
                state.YXOne = action.payload

            }
            if (state.who === 2) {
                state.YXTwo = action.payload
            }

        },


        setEnd(state){
            if (state.who === 1) {
                state.statusOne = playersStatus.end


            }
            if (state.who === 2) {
                state.statusTwo = playersStatus.end
            }
        },




        setWin(state) {
            if (state.who === 1) {
                state.choiceOne = playersPlay.win

            }
            if (state.who === 2) {
                state.choiceTwo = playersPlay.win
            }
        },

        setLose(state) {
            if (state.who === 1) {
                state.choiceOne = playersPlay.lose

            }
            if (state.who === 2) {
                state.choiceTwo = playersPlay.lose
            }
        },

        setOnePlayer(state){
            state.who = 1
        },

        setTwoPlayer(state){
          state.who = 2
        },

        statePlayer(state, action: PayloadAction<number>){
            state.who = action.payload
        },




    }
})

export default playersSlice.reducer