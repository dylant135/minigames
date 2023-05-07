import React, { useState } from "react";
import { ReactionProvider } from "./ReactionContext";

export default function ReactionTest() {
    //start, game, end
    const [mode, setMode] = useState('start')
    const [press, setPress] = useState(false)

    function startGame() {
        setMode('game')
        setTimeout(() => {
            setPress(true)
        }, 2000)
    }

    return (
        <div className="reactionTest">
            <ReactionProvider>
                <h2 className="center">Reaction Test</h2>
                {mode === 'start' && <button className="gamebtn" onClick={startGame}>Start Game</button>}

                {mode === 'game' && <div>
                    {!press && <button>Don't Click Yet</button>}
                    </div>}
                    {press && <button>Click</button>}

                {mode === 'end' && <div></div>}
            </ReactionProvider>
        </div>
    )
}