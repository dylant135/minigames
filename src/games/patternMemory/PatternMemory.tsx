import React, { useState } from "react";
import Board from "./components/Board";
import Guess from "./components/Guess";
import { PatternProvider } from "./patternContext";

export default function PatternMemory() {
    const [mode, setMode] =  useState('start')
    const [boardData, setBoardData] = useState<{isOn: boolean, id: number}[][]>([])
    const [round, setRound] = useState(1)

    function startGame() {
        setMode('game')
    }
    return (
        <div>
            <PatternProvider>
                {mode === 'start' && <div>
                    <button onClick={startGame}>Start Game</button>    
                </div>}

                {mode === 'game' && <Board boardData={boardData} setBoardData={setBoardData} round={round} setMode={setMode} mode={mode} />}

                {mode === 'guess' && <Guess mode={mode} setMode={setMode} />}
            </PatternProvider>

        </div>
    )
}