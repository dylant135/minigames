import React, { useContext, useEffect } from "react";
import numberContext from "../context/NumberContext";
import RoundContext from "../context/RoundContext";

type displayProps = {
    setStage: React.Dispatch<React.SetStateAction<string>>
}

export default function DisplayNum({ setStage } : displayProps) {

    const { roundNum, setRoundNumber} = useContext(RoundContext)
    const { number, setNumber} = useContext(numberContext)

    //generate number
    useEffect(() => {
        if(roundNum === 0) {
            setRoundNumber(1)
        }
        if(number.toString().length === roundNum) {
            return
        }
        
        let num:number[] | string | number = [];
        for(let i = 0; i < roundNum; i++) {
            const ranNum = Math.floor((Math.random() * 10) + 1)
            num.push(ranNum)
        }
        const unArr = num.join('')
        const n = parseInt(unArr)
        setNumber(n)
    }, [number, roundNum, setNumber, setRoundNumber])
    console.log(number)

    //display number
    useEffect(() => {
        if(number.toString().length !== roundNum) {
            return
        }
        const time = roundNum * 1000
        setTimeout(() => {
            setStage('guess')
        }, 2000 + time)
    }, [number])

    return (
        <div className="displayNum">
            <h2 className="center">{number}</h2>
        </div>
    )
}