import React, { useContext, useState } from "react";
import numberContext from "../context/NumberContext";
import RoundContext from "../context/RoundContext";

type checkProps = {
    guess: number,
    setMode: React.Dispatch<React.SetStateAction<string>>,
    setStage: React.Dispatch<React.SetStateAction<string>>,
    setGuess: React.Dispatch<React.SetStateAction<number>>,
    stage: string
}

export default function Check({ guess, setMode, setStage, setGuess, stage}: checkProps) {
    const { number, setIsNumSet } = useContext(numberContext)
    const { setRoundNumber } = useContext(RoundContext)
    const [didCheck, setDidCheck] = useState(false)

    //check guess

    while(didCheck === false && guess !== 0 && stage === 'check') {
        if(number === guess) {
            setGuess(0)
            setRoundNumber(prevState =>{
                return prevState + 1
            })
            setIsNumSet(false)
            setStage('display') 
        } else {
            setMode('end')
        }
        console.log(guess)
        setDidCheck(true)
    }

    
    return (
        <div className="check">

        </div>
    )
}