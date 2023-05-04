import React, { useContext, useEffect, useState } from "react";
import numberContext from "../context/NumberContext";
import RoundContext from "../context/RoundContext";

type checkProps = {
    setMode: React.Dispatch<React.SetStateAction<string>>,
    setStage: React.Dispatch<React.SetStateAction<string>>,
    stage: string
}

export default function Check({ setMode, setStage, stage}: checkProps) {
    const { number, setNumber, setGuess, guess } = useContext(numberContext)
    const { setRoundNumber } = useContext(RoundContext)

    const [isCorrect, setIsCorrect] = useState<boolean>()

    useEffect(() => {
        checkGuess()
    }, [])

    //check guess
    function checkGuess() {
        if(number === guess) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
    }

    function nextRound() {
        setIsCorrect(undefined)
        setGuess(0)
        setNumber(0)
        setRoundNumber(prevState => {
            return prevState + 1
        })
        setStage('display')
    }
    
    return (
        <div className="check">
            {isCorrect && 
            <div>
                <h2 className="center">Correct!</h2>
                <button onClick={nextRound}>Next Round</button>
            </div>}

            {isCorrect === false && 
            <div>
                <h2>Wrong</h2>
            </div>}
        </div>
    )
}