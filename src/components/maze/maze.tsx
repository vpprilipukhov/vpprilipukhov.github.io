import React, {FC} from "react";
import styles from './maze.module.css'
import {useAppDispatch, useAppSelector} from "../../additionally/hooks/redux";
import {mazeSlice} from "../../services/reducer/mazeReducer";

import helmet from "../../additionally/picture/guides/player/blue/helmet.png";
import finish from "../../additionally/picture/guides/player/blue/finish.png";
import shield from "../../additionally/picture/guides/player/blue/shield.png";

import helmetPurple from "../../additionally/picture/guides/player/Purple/helmet.png";
import finishPurple from "../../additionally/picture/guides/player/Purple/finish.png";
import shieldPurple from "../../additionally/picture/guides/player/Purple/shield.png";



import {playersPlay, playersStatus} from "../../additionally/variables/variable";


import  {playersSlice} from "../../services/reducer/playersReducer";


const Maze: FC = () => {


    const {maze, alf} = useAppSelector(state => state.mazeSlice)
    const {startOne, nextOne, nextTwo , startTwo} = useAppSelector(state => state.subPanelSlice)
    const dispatch = useAppDispatch()
    const {generationMaze} = mazeSlice.actions
    const {statusOne, choiceOne, YXOne, YXTwo, statusTwo, twoPlayer,choiceTwo, who } = useAppSelector(state => state.playersSlice)
    const {setWin, setLose, setEnd, setYX, setTwoPlayer, setChoose} = playersSlice.actions
    const {x,y} = useAppSelector(state => state.optionsSlice)


    React.useEffect(() => {
        dispatch(generationMaze({x, y}))
    }, [x,y])


    const getElement = (e: any) => {
        const finish: string = nextOne.y + '-' + nextOne.x

        if (statusOne === playersStatus.choose) {

            dispatch(setYX(e.currentTarget.id))
            dispatch(setEnd())

            if (e.currentTarget.id === finish) {
                dispatch(setWin())

            } else {
                dispatch(setLose())
            }

            dispatch(setTwoPlayer())
            dispatch(setChoose())


        }

        if (statusTwo === playersStatus.choose) {

            dispatch(setYX(e.currentTarget.id))
            dispatch(setEnd())
            if (e.currentTarget.id === finish) {
                dispatch(setWin())

            } else {
                dispatch(setLose())
            }
        }


    }


    const maps = maze.map((e, i) => {


        const maps2 = e.map((el, j) => {
            let widthSquare: number = 600 / maze.length - ((maze.length - 1) / 2) * 2
            let heightSquare: number = 600 / maze.length - ((maze.length - 1) / 2) * 2
            let styleName
            let element: any = undefined

            if (el === '9') {
                styleName = styles.squareInvis
                widthSquare = 20
                heightSquare = 20
            } else if (el === '1') {
                styleName = styles.squareMain
            } else if (el === '7') {
                element = i + ''
                widthSquare = 20
                styleName = styles.squareTable

            } else if (el === '8') {
                element = alf[j - 1]
                heightSquare = 20
                styleName = styles.squareTable

            }


            if (startOne.y === i && startOne.x === j) {
                element = <img src={helmet} alt={""}/>
            }

            // if (nextOne.y === i && nextOne.x === j) {
            //     element = <img src={helmet} alt={""}/>
            // }


            if (startTwo.y === i && startTwo.x === j) {
                element = <img src={helmetPurple} alt={""}/>
            }

            // if (nextTwo.y === i && nextTwo.x === j) {
            //     element = <img src={helmetPurple} alt={""}/>
            // }


            // расположение ответов
            if (statusOne === playersStatus.end)
                if (choiceOne === playersPlay.win) {
                    if (nextOne.y === i && nextOne.x === j) {
                        element = <img src={shield} alt={""}/>
                    }
                } else {


                    // @ts-ignore
                    if ((YXOne.split('-')[0]) == (i) && (YXOne.split('-')[1]) == (j)) {
                        element = <img src={finish} alt={""}/>

                    }
                    if (nextOne.y === i && nextOne.x === j) {
                        element = <img src={shield} alt={""}/>
                    }
                }

            // расположение ответов 2 игрока
            if (twoPlayer) {
                if (statusTwo === playersStatus.end)

                    if (choiceTwo === playersPlay.win) {
                        if (nextTwo.y === i && nextTwo.x === j) {
                            element = <img src={shield} alt={""}/>
                        }
                    } else {


                        // @ts-ignore
                        if ((YXTwo.split('-')[0]) == (i) && (YXTwo.split('-')[1]) == (j)) {
                            element = <img src={finishPurple} alt={""}/>

                        }
                        if (nextTwo.y === i && nextTwo.x === j) {
                            element = <img src={shieldPurple} alt={""}/>
                        }
                    }
            }


            return (
                <div id={i + '-' + j} key={i + '-' + j} onClick={getElement} className={styleName}
                     style={{width: widthSquare, height: heightSquare}}>{element}</div>
            )
        })

        return (

            <div key={i} className={styles.columnArray}>{maps2}</div>

        )


    })


    return (
        <div className={styles.mid}>
            <div className={styles.mainMap}>
                {maps}
            </div>

        </div>
    )


}

export default Maze