import {combineReducers} from "@reduxjs/toolkit"
import mazeSlice from "./reducer/mazeReducer";
import subPanelSlice from "./reducer/subPanelReducer";
import modalSlice from "./reducer/modalReducer";
import optionsSlice from "./reducer/optionsReduser";
import playersSlice from "./reducer/playersReducer";
import storySlice from "./reducer/storyReducer";



export const rootReducer = combineReducers({
    mazeSlice,
    subPanelSlice,
    modalSlice,
    optionsSlice,
    playersSlice,
    storySlice

})


export type RootState = ReturnType<typeof rootReducer>