import React, { useContext, useEffect } from "react";
import Tile from "./Tile";
import patternContext from "../patternContext";

type GuessProps = {
    mode: string
    setMode: React.Dispatch<React.SetStateAction<string>>
}

export default function Guess({ mode, setMode }: GuessProps) {
    const { guessData, setGuessData } = useContext(patternContext)

    useEffect(() => {
        if(mode !== 'guess') return
        generateBoard()
        
    }, [mode, setMode])

    function generateBoard() {
        let index = 0
        let arr: {isOn: boolean, id: number}[][] = []
        for(let i = 0; i < 7; i++) {
            let a: {isOn: boolean, id: number}[] = []
            for(let j = 0; j < 7; j++) {
                a.push({isOn: false, id: index})
                index++
            }
            arr.push(a)
        }
        setGuessData(arr)
    }

    
    const displayBoard = guessData.map(t => {
        const row = t.map(x => {
            return (
                <Tile isOn={x.isOn} id={x.id} />
            )
        })
        return row
    })

    return (
        <div className="board">
            {displayBoard}
        </div>
    )
}