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
        if(number !== 0) {
            return
        }
        console.log(roundNum)

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
    }, [number, roundNum, setNumber, setRoundNumber])

    //display number
    useEffect(() => {
        if(number.toString().length !== roundNum) {
            return
        }
        
        const time = roundNum * 1000
        setTimeout(() => {
            setStage('guess')
        }, 2000 + time)
    }, [number, roundNum, setStage])


    return (
        <div className="displayNum">
            <h2 className="center">{number}</h2>
            <div className="timeBar" >
                <div></div>
            </div>
        </div>
    )
}