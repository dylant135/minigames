import React, { useState } from "react";
import Check from "./components/Check";
import DisplayNum from "./components/DisplayNum";
import Guess from "./components/Guess";
import { NumberContextProvider } from "./context/NumberContext";
import { RoundContextProvider } from "./context/RoundContext";


export default function NumberMemory() {
    const [mode, setMode] = useState('start')
    const [stage, setStage] = useState('display')
    const [guess, setGuess] = useState<number>(0)

    function startGame() {
        setMode('game')
    }

    return (
        <RoundContextProvider>
            <div className="numberMemory">
                <h2 className="center">Number Memory</h2>

                {mode === 'start' && <button className="center" onClick={startGame}>Start</button>}

                {mode === 'game' && <div className="numberGame">
                    <NumberContextProvider>
                        {stage === 'display' && <DisplayNum setStage={setStage} />}
                        {stage === 'guess' && <Guess setStage={setStage} guess={guess} setGuess={setGuess} />}
                        {stage === 'check' && <Check guess={guess} setMode={setMode} setStage={setStage} />}
                    </NumberContextProvider>
                </div>}

            </div>
        </RoundContextProvider>
    )
}