import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface modalState{
    flModal: boolean
}

const initialState: modalState = {
    flModal: true
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        setOnModal(state){
            state.flModal = true
        },
        setOffModal(state){
            state.flModal = false
        }

    }
})



export default modalSlice.reducer