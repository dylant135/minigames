import React, { useState } from "react";
import Board from "./components/Board";
import Guess from "./components/Guess";
import { PatternProvider } from "./patternContext";
import Check from "./components/Check";

export default function PatternMemory() {
    const [mode, setMode] =  useState('start')
    const [round, setRound] = useState(1)

    function startGame() {
        setMode('game')
    }
    return (
        <div>
            <PatternProvider>
                {mode === 'start' && <div className="container">
                    <button onClick={startGame} className="startbtn">Start Game</button>    
                </div>}

                {(mode === 'game' || 'guess' || 'check') && <h2 className="center">Score: {round - 1}</h2>}

                {mode === 'game' && <Board round={round} setMode={setMode} mode={mode} />}

                {mode === 'guess' && <Guess mode={mode} setMode={setMode} />}

                {mode === 'check' && <Check round={round} setRound={setRound} mode={mode} setMode={setMode} />}
            </PatternProvider>

        </div>
    )
}