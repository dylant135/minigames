import React, { useState } from "react";

export default function ReactionTest() {
    //start, game, end
    const [mode, setMode] = useState('start')
    return (
        <div className="reactionTest">
            <h2 className="center">Reaction Test</h2>
            {mode === 'start' && <button className="gamebtn" onClick={() => setMode('game')}>Start Game</button>}
            {mode === 'game' && <div></div>}
            {mode === 'end' && <div></div>}
        </div>
    )
}