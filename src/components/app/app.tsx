import React, {FC} from 'react';

import styles from './app.module.css'
import {useAppDispatch, useAppSelector} from "../../additionally/hooks/redux";
import {mazeSlice} from "../../services/reducer/mazeReducer";
import {subPanelSlice} from "../../services/reducer/subPanelReducer";
import Maze from "../maze/maze";
import Bottom from "../bottom/bottom";
import {start} from "../../additionally/functions/start";
import ModalApp from "../modal/modalApp";
import RightPanel from "../rightPanel/rightPanel";
import {optionsSlice} from "../../services/reducer/optionsReduser";
import {playersSlice} from "../../services/reducer/playersReducer";
import {useDispatch} from "react-redux";


const App: FC = () => {


    const {storyMod} = useAppSelector(state => state.storySlice)

    const [modLvl, setModLvl] = React.useState(1)
    const {setset} = playersSlice.actions
    const dispatch = useDispatch()



    return (
        <div>
            <ModalApp modLvl={modLvl} setModLvl={setModLvl}/>

            <div className={styles.background}>
                <div className={styles.head}>

                </div>
                <div className={styles.left}></div>
                <Maze/>
                <div className={styles.right}>
                    {storyMod && <RightPanel modLvl={modLvl} setModLvl={setModLvl}/>}
                </div>
                <Bottom/>
            </div>
        </div>
    );
}

export default App;
