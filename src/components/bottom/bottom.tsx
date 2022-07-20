import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../additionally/hooks/redux";
import {subPanelSlice} from "../../services/reducer/subPanelReducer";
import styles from "./bottom.module.css"
import up from '../../additionally/picture/guides/guidesNormall/up.png'
import down from '../../additionally/picture/guides/guidesNormall/down.png'
import left from '../../additionally/picture/guides/guidesNormall/left.png'
import right from '../../additionally/picture/guides/guidesNormall/right.png'

import upBlue from '../../additionally/picture/guides/guidesBlue/up.png'
import downBlue from '../../additionally/picture/guides/guidesBlue/down.png'
import leftBlue from '../../additionally/picture/guides/guidesBlue/left.png'
import rightBlue from '../../additionally/picture/guides/guidesBlue/right.png'

import upPurple from '../../additionally/picture/guides/guidesPurple/up.png'
import downPurple from '../../additionally/picture/guides/guidesPurple/down.png'
import leftPurple from '../../additionally/picture/guides/guidesPurple/left.png'
import rightPurple from '../../additionally/picture/guides/guidesPurple/right.png'


import {wayEasy} from "../../additionally/functions/wayEasy";
import {wayJump} from "../../additionally/functions/wayJump";
import {playersSlice} from "../../services/reducer/playersReducer";


const Bottom: FC = () => {
    const scrollRef = React.useRef<HTMLLIElement>(null)
    const {maze} = useAppSelector(state => state.mazeSlice)
    const {arraySub, iSub, startOne, startTwo, nextOne, nextTwo, whoSub} = useAppSelector(state => state.subPanelSlice)
    const { setSubArray, setterISub, getNextOne, getNextTwo,} = subPanelSlice.actions
    const {timer, way, jump} = useAppSelector(state => state.optionsSlice)
    const {twoPlayer} = useAppSelector(state => state.playersSlice)
    const { setChooseOne, setOnePlayer} = playersSlice.actions
    const {numberSub} = useAppSelector(state => state.optionsSlice)
    const {generation} = subPanelSlice.actions

    const dispatch = useAppDispatch()

    const handleScrollGroups = (e: React.RefObject<HTMLLIElement>) => {
        // @ts-ignore
        e.current.scrollTop += 76
    }


    React.useEffect(()=>{
        dispatch(generation(numberSub))
    },[numberSub])

    React.useEffect(() => {

        const timerGen = setTimeout(() => {
                let arr
                if (iSub % 5 === 0 && iSub !== 0 && iSub !== 5) {
                    handleScrollGroups(scrollRef)
                }
                if (iSub < 0) {
                    dispatch(setterISub())
                } else if (startOne.x != 0 && iSub === 0) {

                    if (way === 'easy') {
                        arr = wayEasy(maze, startOne)
                    } else {
                        arr = wayJump(maze, startOne, jump)
                    }
                    dispatch(getNextOne({y: arr.y, x: arr.x}))
                    dispatch(setSubArray({guides: arr.guides, two: twoPlayer}))

                } else if (startTwo.x != 0 && iSub === 1 && twoPlayer) {
                    arr = wayJump(maze, startTwo, jump)
                    dispatch(getNextTwo({y: arr.y, x: arr.x}))
                    dispatch(setSubArray({guides: arr.guides, two: twoPlayer}))
                } else if (startOne.x > 0 || startTwo.x > 0) {

                    if (way === 'easy') {
                        arr = wayEasy(maze, nextOne)
                    } else {
                        whoSub === 1 ? arr = wayJump(maze, nextOne, jump) : arr = wayJump(maze, nextTwo, jump)

                    }
                    whoSub === 1 ? dispatch(getNextOne({y: arr.y, x: arr.x})) : dispatch(getNextTwo({y: arr.y, x: arr.x}))
                    dispatch(setSubArray({guides: arr.guides, two: twoPlayer}))
                }


                if (iSub === arraySub.length - 1 && arraySub.length > 0) {
                    dispatch(setOnePlayer())
                    dispatch(setChooseOne())
                }

            }
            , timer);
        return () => clearTimeout(timerGen);
    }, [iSub]);


    const generationQuestions = arraySub.map((e, i) => {
        let htmlEl = null
        switch (e) {
            case 'normal':
                htmlEl = <div key={i} className={styles.squareBot}>

                </div>
                break
            case 'up':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={up} alt={""}/>
                    </div>
                break
            case 'right':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={right} alt={""}/>
                    </div>
                break
            case 'down':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={down} alt={""}/>
                    </div>
                break
            case 'left':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={left} alt={""}/>
                    </div>
                break

            case 'up-blue':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={upBlue} alt={""}/>
                    </div>
                break
            case 'right-blue':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={rightBlue} alt={""}/>
                    </div>
                break
            case 'down-blue':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={downBlue} alt={""}/>
                    </div>
                break
            case 'left-blue':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={leftBlue} alt={""}/>
                    </div>
                break


            case 'up-purple':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={upPurple} alt={""}/>
                    </div>
                break
            case 'right-purple':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={rightPurple} alt={""}/>
                    </div>
                break
            case 'down-purple':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={downPurple} alt={""}/>
                    </div>
                break
            case 'left-purple':
                htmlEl =
                    <div key={i} className={styles.squareBot}>
                        <img src={leftPurple} alt={""}/>
                    </div>
                break

        }
        return (
            htmlEl
        )
    })

    return (

        <div className={styles.bot}>
            <div className={styles.mainBot}>
                <li ref={scrollRef} className={styles.blockComponent}>
                    {generationQuestions}

                </li>
            </div>
        </div>
    )


}

export default Bottom