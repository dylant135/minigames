import React, { useState } from "react";
import Check from "./components/Check";
import DisplayNum from "./components/DisplayNum";
import Guess from "./components/Guess";
import { NumberContextProvider } from "./context/NumberContext";
import { RoundContextProvider } from "./context/RoundContext";


export default function NumberMemory() {
    const [mode, setMode] = useState('start')
    const [stage, setStage] = useState('display')
    const [score, setScore] = useState(0)

    function startGame() {
        setMode('game')
    }

    return (
        <RoundContextProvider>
            <div className="numberMemory">
                <h2 className="center">Number Memory</h2>
                <h3>Score: {score}</h3>

                {mode === 'start' && <button className="startbtn" onClick={startGame}>Start</button>}

                {mode === 'game' && <div className="numberGame">
                    <NumberContextProvider>
                        {stage === 'display' && <DisplayNum setStage={setStage} />}
                        {stage === 'guess' && <Guess setStage={setStage}  />}
                        {stage === 'check' && <Check setMode={setMode} setStage={setStage} stage={stage} setScore={setScore} />}
                    </NumberContextProvider>
                </div>}


            </div>
        </RoundContextProvider>
    )
}