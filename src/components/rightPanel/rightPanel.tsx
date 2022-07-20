import React from "react";
import styles from "./rigthPanel.module.css"
import helmet from "../../additionally/picture/guides/player/blue/helmet.png"
import helmet2 from "../../additionally/picture/guides/player/Purple/helmet.png"
import heart from "../../additionally/picture/other/heart.png"
import {useAppDispatch, useAppSelector} from "../../additionally/hooks/redux";
import {modalSlice} from "../../services/reducer/modalReducer";
import {useDispatch} from "react-redux";
import {playersSlice} from "../../services/reducer/playersReducer";
import {storySlice} from "../../services/reducer/storyReducer";
import {start} from "../../additionally/functions/start";
import {mazeSlice} from "../../services/reducer/mazeReducer";
import {subPanelSlice} from "../../services/reducer/subPanelReducer";
import {optionsSlice} from "../../services/reducer/optionsReduser";
import {playersStatus} from "../../additionally/variables/variable";


interface Props {
    props?: React.ReactNode
    modLvl: number
    setModLvl: Function
}

const RightPanel: React.FC<Props> = ({modLvl, setModLvl}) => {

    const {hpOne, hpTwo, scoreOne, scoreTwo, buff, statusOne,} = useAppSelector(state => state.playersSlice)

    const {setOnePlayerAwait} = playersSlice.actions

    const {twoPlayer} = useAppSelector(state => state.playersSlice)

    const {setOffModal, setOnModal} = modalSlice.actions
    const {setBuff} = playersSlice.actions


    const dispatch = useDispatch()

    const onClick = () => {



        if (statusOne === playersStatus.end)
            if (modLvl == 5) {
                setModLvl(modLvl * 4)

                dispatch(setOnModal())
                dispatch(setOnePlayerAwait())

            } else {
                setModLvl(modLvl + 1)
                dispatch(setOnModal())
                dispatch(setOnePlayerAwait())
            }



    }
    const hp1 = hpOne.map((e, i) => {
        return <div key={i} className={styles.imgHP}><img src={heart} alt={''}/></div>

    })

    const hp2 = hpTwo.map((e, i) => {
        return <div key={i} className={styles.imgHP}><img src={heart} alt={''}/></div>

    })

    // const buffs = buff.map(e => {
    //     return <div className={styles.buff}>
    //         <div className={styles.txtMy}>{e.name}</div>
    //         <div className={styles.txtMy}>{'x' + e.n}</div>
    //     </div>
    // })


    return (
        <div>
            <div className={styles.table}>
                <div className={styles.pl}>
                    <div className={styles.imgPl}><img src={helmet} alt={''}/>
                    </div>
                    <div className={styles.hp}>
                        {hp1}
                    </div>
                    <div className={styles.txtMy}>
                        {scoreOne}
                    </div>
                </div>
                {twoPlayer && <div className={styles.pl}>
                    <div className={styles.imgPl2}><img src={helmet2} alt={''}/>
                    </div>
                    <div className={styles.hp}>
                        {hp2}
                    </div>

                    <div className={styles.txtMy}>
                        {scoreTwo}
                    </div>


                </div>}

                <div className={styles.txtBot}>
                    {/*{buffs}*/}
                </div>


            </div>
            <div className={styles.bott}>
                <a onClick={onClick} className={styles.button24}>Продолжить</a>
            </div>
        </div>
    )
}
export default RightPanel