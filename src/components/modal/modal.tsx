import React from "react";
import styles from './modal.module.css'
import {modalSlice} from "../../services/reducer/modalReducer";
import {useAppDispatch} from "../../additionally/hooks/redux";


interface Props {
    children?: React.ReactNode
    title?: string
    nameB1?: string
    nameB2?: string
    flB2?: boolean


    setAnswerB1: Function
    setAnswerB2: Function
}

const Modal: React.FC<Props> = ({
                                    title,
                                    children,
                                    nameB1,
                                    nameB2,
                                    setAnswerB1,
                                    setAnswerB2,
                                    flB2,

                                }) => {

    const clickOne = () => {
        setAnswerB1(true)
    }

    const clickTwo = () => {
        setAnswerB2(true)
    }


    return (

        <div className={styles.modalContent}
        >
            <div className={styles.txtModal}>
                <div className={styles.text}>
                    {children}
                </div>
            </div>
            <div className={styles.buttModalIn}>
                <a onClick={clickOne} className={styles.button24}>
                    {nameB1}
                </a>
                {flB2 && <a  onClick={clickTwo} className={styles.button24}>
                    {nameB2}
                </a>}
            </div>


        </div>

    )
}


export default Modal