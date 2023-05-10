import React, { useContext, useState } from "react";
import reactionContext, { ReactionProvider } from "./ReactionContext";

export default function ReactionTest() {
    const { roundNum, setRoundNum} = useContext(reactionContext)

    //start, game, roundResults, end
    const [mode, setMode] = useState('start')
    const [press, setPress] = useState(false)
    const [startTime, setStartTime] = useState<number>(0)
    const [time, setTime] = useState(0)

    function startGame() {
        setMode('game')
        setTimeout(() => {
            changebtn()
        }, 2000)
    }


    function changebtn() {
        const s = performance.now()
        setStartTime(s)
        setPress(true)
    }

    function early() {

    }

    function handleClick() {
        const elapsed = performance.now() - startTime
        setTime(elapsed)
        setMode('roundResults')
    }

    function nextGame() {
        setPress(false)
        setRoundNum((prevState):number => {
            return prevState + 1
        })
        startGame()
    }
    console.log(roundNum)

    return (
        <div className="reactionTest">
            <ReactionProvider>
                <h2 className="center">Reaction Test</h2>
                {mode === 'start' && <button className="gamebtn" onClick={startGame}>Start Game</button>}

                {mode === 'game' && <div>
                    {!press && <button className="early" onClick={early}>Don't Click Yet</button>}

                    {press && <button className="click" onClick={handleClick}>Click</button>}
                    </div>}

                    {mode === 'roundResults' && <div className="roundResults">
                            <h3 className="center">{time}</h3>
                            {roundNum < 5 && <button onClick={nextGame}>Next Round</button>}
                        </div>}

                {mode === 'end' && <div></div>}
            </ReactionProvider>
        </div>
    )
}