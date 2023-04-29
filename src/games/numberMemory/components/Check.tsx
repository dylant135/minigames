import React, { useContext, useEffect, useState } from "react";
import numberContext from "../context/NumberContext";
import RoundContext from "../context/RoundContext";

type checkProps = {
    guess: number,
    setMode: React.Dispatch<React.SetStateAction<string>>,
    setStage: React.Dispatch<React.SetStateAction<string>>
}

export default function Check({ guess, setMode, setStage}: checkProps) {
    const { number } = useContext(numberContext)
    const { setRoundNumber } = useContext(RoundContext)
    const [isCorrect, setIsCorrect] = useState('')

    //check guess
    useEffect(() => {
        if(number === guess) {
            setIsCorrect('correct')
        } else {
            setIsCorrect('wrong')
        }
    }, [guess, number])

    //handle correct or wrong
    useEffect(() => {
        if(isCorrect === 'correct') {
            setRoundNumber(prevState => prevState++)
            setStage('display')
        } else if(isCorrect === 'wrong') {
            setMode('end')
        }
        setIsCorrect('')
    }, [isCorrect])

    return (
        <div className="check">

        </div>
    )
}