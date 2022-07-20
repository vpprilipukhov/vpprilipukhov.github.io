import React, {FC} from 'react';

import ReactDOM from 'react-dom';
import Modal from "./modal";

import {useAppDispatch, useAppSelector} from "../../additionally/hooks/redux";
import ModalOverlay from "./modalOverlay/modalOverlay";
import {mazeSlice} from "../../services/reducer/mazeReducer";
import {subPanelSlice} from "../../services/reducer/subPanelReducer";
import {optionsSlice} from "../../services/reducer/optionsReduser";
import {storySlice} from "../../services/reducer/storyReducer";
import {start} from "../../additionally/functions/start";
import {modalSlice} from "../../services/reducer/modalReducer";
import {playersSlice} from "../../services/reducer/playersReducer";


interface Props {
    props?: React.ReactNode
    modLvl: number
    setModLvl: Function
}

const ModalApp: React.FC<Props> = ({modLvl, setModLvl}) => {

    const {maze} = useAppSelector(state => state.mazeSlice)
    const dispatch = useAppDispatch()
    const {generationMaze} = mazeSlice.actions
    const {generation, setNewLvl, getStartOne, getStartTwo,} = subPanelSlice.actions

    const {numberSub, x, y} = useAppSelector(state => state.optionsSlice)
    const {setTimer, setXY, setNSub, setWayEasy, setWayJump,setJump} = optionsSlice.actions

    const {offMod, setMod, setModBigGame} = storySlice.actions
    const {setOffModal, setOnModal} = modalSlice.actions
    const {setBuff, setTwoPlayers,setset} = playersSlice.actions


    const flModal = useAppSelector(state => state.modalSlice.flModal)

    const [txt, setText] = React.useState<string>('')
    const [fl, setFl] = React.useState<boolean>(false)

    const [b1, setB1] = React.useState<string>('')
    const [b2, setB2] = React.useState<string>('')

    const [answer1, setAnswerB1] = React.useState<boolean>(false)
    const [answer2, setAnswerB2] = React.useState<boolean>(false)


    React.useEffect(() => {
        switch (modLvl) {

            case 36:
                dispatch(setOnModal())
                setText('Пора супер игре! ИГРЕ ВДВОЕМ!')
                setB1('продолжить')
                setFl(false)

                break


            case 35:
                dispatch(setOnModal())
                setText('Ну ладно, мы итак задержались!')
                setB1('продолжить')
                setFl(false)

                break




            case 34:
                dispatch(setOnModal())
                setText('Тебе надо набрать 1000 очков!!!')
                setB1('продолжить')
                setFl(false)

                break

            case 33:
                dispatch(setOnModal())
                setText('Вперед Мой друг!')
                setB1('продолжить')
                setFl(false)

                break

            case 32:
                dispatch(setOnModal())
                setText('3 игра будет ускорятся, а задания сложнее')
                setB1('продолжить')
                setFl(false)

                break

            case 31:
                dispatch(setOnModal())
                setText('2 будут вводиться прыжки через клетки')
                setB1('продолжить')
                setFl(false)

                break

            case 30:
                dispatch(setOnModal())
                setText('Переместиться на противоположную')
                setB1('продолжить')
                setFl(false)

                break


            case 29:
                dispatch(setOnModal())
                setText('1) теперь подойдя к крайне клетке, ты можешь преместиться....')
                setB1('продолжить')
                setFl(false)

                break

            case 28:
                dispatch(setOnModal())
                setText('Вводим новые правила:')
                setB1('продолжить')
                setFl(false)

                break

            case 27:
                dispatch(setOnModal())
                setText('Сейчас все включим! ')
                setB1('продолжить')
                setFl(false)

                break


            case 26:
                dispatch(setOnModal())
                setText('Все, я сходил в тех отдел! Разобрался')
                setB1('продолжить')
                setFl(false)

                break




            case 24:
                dispatch(setOnModal())
                setText('Вот, я говорил! Уже лучше! Можно еще, еще больше!')
                setB1('продолжить')
                setFl(false)


                break

            case 23:
                dispatch(setOnModal())
                setText('Так. Без паники. Контент будет!')
                setB1('продолжить')
                setFl(false)


                break

            case 22:
                dispatch(setOnModal())
                setText('..........')
                setB1('продолжить')
                setFl(false)


                break

            case 21:
                dispatch(setOnModal())
                setText('Мне обещали МЕГА ИГРУ! Я ВАМ ОБЕЩАЛ МЕГА ИГРУ!')
                setB1('продолжить')
                setFl(false)


                break

            case 20:
                dispatch(setOnModal())
                setText('И это все? Нерабочая панель?!')
                setB1('продолжить')
                setFl(false)


                break


            case 18:
                dispatch(setOnModal())
                setText('Мега игра открывает новые горизонты! Ты готов?')
                setB1('Да!!!')
                setB2('Нет')
                setFl(true)

                break


            case 17:
                dispatch(setOnModal())
                setText('Да! Совершенно верно, это мега игра!')
                setB1('продолжить')
                setFl(false)

                break


            case 16:
                dispatch(setOnModal())
                setText('Ты хочешь ссыграть в мега игру?')
                setB1('да!!!!!!!!!!!!')
                setFl(false)

                break

            case 15:
                dispatch(setOnModal())
                setText('Я помогу тебе сделать верный выбор...')
                setB1('продолжить')
                setFl(false)

                break

            case 14:
                dispatch(setOnModal())
                setText('Я не могу в это поверить...')
                setB1('продолжить')
                setFl(false)

                break
            case 13:
                dispatch(setOnModal())
                setText('................')
                setB1('продолжить')
                setFl(false)

                break

            case 12:
                dispatch(setOnModal())
                setText('................')
                setB1('продолжить')
                setFl(false)

                break

            case 11:
                dispatch(setOnModal())
                setText('................')
                setB1('продолжить')
                setFl(false)

                break
            case 10:
                dispatch(setOnModal())
                setText('Я не могу в это поверить...')
                setB1('продолжить')
                setFl(false)

                break

            case 9:
                dispatch(setOnModal())
                setText('Ты готов отказаться от мега игры?')
                setB1('Да')
                setB2('Нет')
                setFl(true)

                break

            case 8:
                dispatch(setOnModal())
                setText('Ну это точно не может быть случайностью!...')
                setB1('продолжить')
                setFl(false)

                break

            case 7:
                dispatch(setOnModal())

                setText('Ты хочешь ссыграть в мега игру?')
                setB1('Да!')
                setB2('Нет')
                setFl(true)

                break

            case 6:
                dispatch(setOnModal())
                setText('Мне показалось или ты нажал нет? Я спрошу еще раз')
                setB1('продолжить')
                setFl(false)

                break

            // продолжение игры
            case 5:
                dispatch(setOnModal())

                setText('Тогда начнем!')
                setB1('Поехали!')
                setFl(false)


                break
            case 4:
                dispatch(setOnModal())

                setText('Ты готов?')
                setB1('Да!')
                setB2('Нет!')
                setFl(true)


                break
            case 3:

                dispatch(setOnModal())
                setText('Конечно нет! В этой игре ты можешь все!')
                setB1('Продолжить')

                setFl(false)


                break

            case 2:
                dispatch(setOnModal())
                setText('Мега игра? Но что такое мега игра?.....')
                setB1('Не знаю')
                setB2('Это мега игра!')
                setFl(true)

                break

            case 1:
                dispatch(setOnModal())
                setText('Добро пожаловать в лаберинт! Какую игру начнем?')
                setB1('Обычная')
                setB2('Мега игра')
                setFl(true)

                break

        }
    }, [modLvl])

    React.useEffect(() => {
        let startOneNew : { y: number, x: number }
        switch (modLvl) {

            case 36:
                dispatch(setTimer(500))
                dispatch(setXY({x: 8, y: 8}))
                dispatch(setNSub(40))
                dispatch(generationMaze({x, y}))
                dispatch(setNewLvl())

                dispatch(setWayJump())
                dispatch(setJump())
                dispatch(setTwoPlayers)
                dispatch(setBuff())
                dispatch(setset)

                startOneNew = start(maze, {y: 0, x: 0})
                dispatch(getStartOne(startOneNew))
                dispatch(generation(numberSub))



                let starTwoNew: { y: number, x: number } = start(maze, {y: 0, x: 0})
                dispatch(getStartTwo(starTwoNew))
                dispatch(setOffModal())



                break


            case 35:
                setModLvl(36)
                setAnswerB1(false)
                setAnswerB2(false)
                dispatch(setTwoPlayers)
                dispatch(setOffModal())
                dispatch(setset)

                break

            case 34:


                dispatch(setTimer(500))
                dispatch(setXY({x: 8, y: 8}))
                dispatch(setNSub(24))
                dispatch(generationMaze({x, y}))
                dispatch(setNewLvl())
                dispatch(offMod())
                dispatch(setOffModal())
                dispatch(setWayJump())
                dispatch(setJump())
                dispatch(setTwoPlayers)

                startOneNew = start(maze, {y: 0, x: 0})
                dispatch(getStartOne(startOneNew))
                dispatch(generation(numberSub))
                dispatch(setMod())
                dispatch(setBuff)
                dispatch(setModBigGame())



                break


            case 33:
                setModLvl(34)
                setAnswerB1(false)
                setAnswerB2(false)
                dispatch(setTwoPlayers)
                dispatch(setOffModal())

                break

            case 32:
                setModLvl(33)
                setAnswerB1(false)
                setAnswerB2(false)
                dispatch(setOffModal())

                break

            case 31:
                setModLvl(32)
                setAnswerB1(false)
                setAnswerB2(false)
                dispatch(setOffModal())

                break

            case 30:
                setModLvl(31)
                setAnswerB1(false)
                setAnswerB2(false)
                dispatch(setOffModal())

                break

            case 29:
                setModLvl(30)
                setAnswerB1(false)
                setAnswerB2(false)
                dispatch(setOffModal())

                break

            case 28:
                setModLvl(29)
                setAnswerB1(false)
                setAnswerB2(false)
                dispatch(setOffModal())

                break

            case 27:
                setModLvl(28)
                setAnswerB1(false)
                setAnswerB2(false)
                dispatch(setOffModal())

                break

            case 26:
                setModLvl(27)
                setAnswerB1(false)
                setAnswerB2(false)


                break


            case 24:
                setModLvl(26)
                setAnswerB1(false)
                setAnswerB2(false)

                break




            case 23:
                dispatch(setTimer(1000))
                dispatch(setXY({x: 8, y: 8}))
                dispatch(generationMaze({x, y}))
                dispatch(setNSub(10))
                dispatch(setNewLvl())

                dispatch(setOffModal())

                startOneNew = start(maze, {y: 0, x: 0})
                dispatch(getStartOne(startOneNew))
                dispatch(generation(numberSub))
                dispatch(setMod())


                break


            case 22:
                setModLvl(23)
                setAnswerB1(false)
                setAnswerB2(false)

                break

            case 21:
                setModLvl(22)
                setAnswerB1(false)
                setAnswerB2(false)

                break

            case 20:
                setModLvl(21)
                setAnswerB1(false)
                setAnswerB2(false)

                break




            case 5:

                if (answer1) {
                    dispatch(setTimer(1000))
                    dispatch(setXY({x: 4, y: 4}))
                    dispatch(setNSub(10))
                    dispatch(generationMaze({x, y}))
                    dispatch(setNewLvl())
                    dispatch(offMod())
                    dispatch(setOffModal())
                    dispatch(setWayEasy())
                    startOneNew = start(maze, {y: 0, x: 0})
                    dispatch(getStartOne(startOneNew))
                    dispatch(generation(numberSub))
                    dispatch(setMod())


                }

                setAnswerB1(false)
                setAnswerB2(false)

                break


            case 18:
                if (answer1) {
                    setModLvl(5)

                }
                if (answer2) {
                    setModLvl(6)


                }

                setAnswerB1(false)
                setAnswerB2(false)
                break

            case 17:
                setModLvl(18)
                setAnswerB1(false)
                setAnswerB2(false)


                break

            case 16:
                setModLvl(5)
                setAnswerB1(false)
                setAnswerB2(false)


                break

            case 15:
                setModLvl(16)
                setAnswerB1(false)
                setAnswerB2(false)

                break

            case 14:
                setModLvl(15)
                setAnswerB1(false)
                setAnswerB2(false)


                break

            case 13:
                setModLvl(14)
                setAnswerB1(false)
                setAnswerB2(false)


                break
            case 12:
                setModLvl(13)
                setAnswerB1(false)
                setAnswerB2(false)


                break
            case 11:
                setModLvl(12)
                setAnswerB1(false)
                setAnswerB2(false)


                break

            case 10:
                setModLvl(11)
                setAnswerB1(false)
                setAnswerB2(false)


                break
            case 9:
                if (answer1) {

                    setModLvl(10)
                    dispatch(setOffModal())
                }
                if (answer2) {

                    setModLvl(5)
                    dispatch(setOffModal())
                }


                setAnswerB1(false)
                setAnswerB2(false)


                break


            case 8:
                if (answer1) {
                    setModLvl(9)
                    dispatch(setOffModal())
                }

                setAnswerB1(false)
                setAnswerB2(false)


                break


            case 7:
                if (answer1) {
                    setModLvl(5)
                    dispatch(setOffModal())
                }
                if (answer2) {
                    setModLvl(8)
                    dispatch(setOffModal())
                }


                setAnswerB1(false)
                setAnswerB2(false)


                break
            case 6:
                if (answer1) {
                    setModLvl(7)
                    dispatch(setOffModal())
                }
                setAnswerB1(false)
                setAnswerB2(false)


                break

            case 4:
                if (answer1) {
                    setModLvl(5)
                    dispatch(setOffModal())
                }
                if (answer2) {
                    setModLvl(6)
                    dispatch(setOffModal())
                }

                setAnswerB1(false)
                setAnswerB2(false)

                break

            case 3:
                if (answer1) {
                    setModLvl(4)
                    dispatch(setOffModal())
                }
                setAnswerB1(false)
                setAnswerB2(false)

                break

            case 2:
                if (answer1) {
                    setModLvl(3)
                    dispatch(setOffModal())

                }
                if (answer2) {
                    dispatch(setOffModal())
                    setModLvl(17)
                }

                setAnswerB1(false)
                setAnswerB2(false)


                break


            case 1:
                if (answer1) {

                    dispatch(setTimer(1000))
                    dispatch(setXY({x: 4, y: 4}))
                    dispatch(setNSub(10))
                    dispatch(generationMaze({x, y}))
                    dispatch(setNewLvl())
                    dispatch(offMod())
                    dispatch(setOffModal())
                    dispatch(setWayEasy())
                    startOneNew = start(maze, {y: 0, x: 0})
                    dispatch(getStartOne(startOneNew))
                    dispatch(generation(numberSub))


                }
                if (answer2) {
                    setModLvl(2)
                    dispatch(setOffModal())

                }

                setAnswerB1(false)
                setAnswerB2(false)
                break

        }
    }, [answer1, answer2])


    return (

        <main>

            {flModal &&
                ReactDOM.createPortal(
                    <div>
                        <ModalOverlay/>
                        <Modal nameB1={b1} nameB2={b2} flB2={fl} setAnswerB1={setAnswerB1}
                               setAnswerB2={setAnswerB2}>{txt}</Modal>

                    </div>,
                    document.getElementById('portal') as HTMLElement
                )}


        </main>

    )

}

export default ModalApp