import React, { useContext, useEffect, useState } from "react";
import patternContext from "../patternContext";
import Tile from "./Tile";

type checkProps = {
    round: number,
    setRound: React.Dispatch<React.SetStateAction<number>>,
    mode: string,
    setMode: React.Dispatch<React.SetStateAction<string>>
}

export default function Check({round, setRound, mode, setMode}: checkProps) {
    const { guessData, boardData} = useContext(patternContext)
    const [isCorrect, setIsCorrect] = useState('')
    const [mistakes, setMistakes] = useState<{isOn: boolean, id: number}[]>([])

    useEffect(() => {
        if(mode !== 'check') return
        checkGuess()
    }, [round, mode])
    
    function checkGuess() {
        const wrong: {isOn: boolean, id: number}[] = []
        for(let i = 0; i < guessData.length; i++) {
           for(let j = 0; j < guessData[i].length; j++) {
                if(guessData[i][j].isOn !== boardData[i][j].isOn) {
                    wrong.push(guessData[i][j])
                }
           }
        }

        if(wrong.length >= 1) {
            setMistakes(wrong)
            incorrect(wrong)
        } else {
            correct()
        }
    }

    function incorrect(wrong: {isOn: boolean, id: number}[]) {
        setIsCorrect('wrong')
    }

    function correct() {
        setIsCorrect('correct')
    }

    const displayBoard = boardData.map(r => {
        const row = r.map(x => {
            return <Tile key={x.id} isOn={x.isOn} id={x.id} />
        })
        return row
    })

    const displayGuess = guessData.map(r => {
        const row = r.map(x => {
            return <Tile key={x.id} isOn={x.isOn} id={x.id} />
        })
        return row
    })

    return (
        <div className="check">
            {isCorrect === 'correct' && <div>
                <h2 className="center">Correct!</h2>
                <div className="board">
                    {displayBoard}
                </div>
            </div>}

            {isCorrect === 'wrong' && <div>
                <h2 className="center">Wrong! {mistakes.length} Mistakes</h2>
                <h2 className="center">Pattern</h2>
                <div className="board">
                    {displayBoard}
                </div>

                <h2 className="center">Guess</h2>
                <div className="board">
                    {displayGuess}
                </div>
            </div>}

        </div>
    )
}