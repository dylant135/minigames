import React, { useContext, useEffect, useState } from "react";
import numberContext from "../context/NumberContext";
import RoundContext from "../context/RoundContext";

type checkProps = {
    setMode: React.Dispatch<React.SetStateAction<string>>,
    setStage: React.Dispatch<React.SetStateAction<string>>,
    stage: string,
    setScore: React.Dispatch<React.SetStateAction<number>>
}

export default function Check({ setMode, setStage, stage, setScore}: checkProps) {
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
        setScore(prevState => prevState + 1)
        setIsCorrect(undefined)
        setGuess(0)
        setNumber(0)
        setRoundNumber(prevState => prevState + 1)
        setStage('display')
    }

    function newGame() {
        setScore(0)
        setIsCorrect(undefined)
        setGuess(0)
        setNumber(0)
        setRoundNumber(1)
        setStage('display')
    }
    
    return (
        <div className="check">
            {isCorrect && 
            <div>
                <h2 className="center">Correct!</h2>
                <button onClick={nextRound} className='nextRound'>Next Round</button>
            </div>}

            {isCorrect === false && 
            <div className="incorrect">
                <h2>Wrong</h2>
                <h3>The Number: {number}</h3>
                <h3>Guess: {guess}</h3>
                <button onClick={newGame} className='nextRound'>New Game</button>
            </div>}
        </div>
    )
}