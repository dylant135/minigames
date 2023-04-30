import React, { useContext, useEffect } from "react";
import numberContext from "../context/NumberContext";
import RoundContext from "../context/RoundContext";

type displayProps = {
    setStage: React.Dispatch<React.SetStateAction<string>>
}

export default function DisplayNum({ setStage } : displayProps) {

    const { roundNum, setRoundNumber} = useContext(RoundContext)
    const { number, setNumber, isNumSet, setIsNumSet} = useContext(numberContext)

    //generate number
    useEffect(() => {
        console.log(roundNum)
        if(isNumSet) {
            return
        }
        //set number
        let num:number[] | string | number = [];
        for(let i = 0; i < roundNum; i++) {
            let ranNum = Math.floor((Math.random() * 10) + 1)
            if(ranNum === 10) {
                ranNum = 9
            }
            num.push(ranNum)
        }
        const unArr = num.join('')
        const n = parseInt(unArr)
        setNumber(n)
        setIsNumSet(true)
    }, [isNumSet, number, roundNum, setIsNumSet, setNumber, setRoundNumber])

    //display number
    useEffect(() => {
        if(number.toString().length !== roundNum) {
            return
        }
        if(!isNumSet) {
            return
        }
        const time = roundNum * 1000
        setTimeout(() => {
            setStage('guess')
        }, 2000 + time)
    }, [isNumSet, number, roundNum, setStage])

    return (
        <div className="displayNum">
            <h2 className="center">{number}</h2>
        </div>
    )
}