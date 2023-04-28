import React, { useContext, useState } from "react";
import DisplayNum from "./components/DisplayNum";
import Guess from "./components/Guess";
import { NumberContextProvider } from "./context/NumberContext";
import RoundContext, { RoundContextProvider } from "./context/RoundContext";


export default function NumberMemory() {
    //const [mode, setMode] = useState('start')
    const { mode } = useContext(RoundContext)

    return (
        <RoundContextProvider>
            <div className="numberMemory">
                <h2 className="center">Number Memory</h2>

                {mode === 'start' && <button className="center" onClick={() => setMode('game')}>Start</button>}

                {mode === 'game' && <div className="numberGame">
                    <NumberContextProvider>
                        <DisplayNum />
                        <Guess />
                    </NumberContextProvider>
                </div>}

            </div>
        </RoundContextProvider>
    )
}