import React, { useEffect, useState } from "react";

export default function ReactionTest() {
    const [roundNum, setRoundNum] = useState(1)
    const [mode, setMode] = useState('start')
    const [press, setPress] = useState(false)
    const [startTime, setStartTime] = useState(0)
    const [scores, setScores] = useState<number[]>([])
    const [isEarly, setIsEarly] = useState(0)

    useEffect(() => {
        if(mode !== 'game') return
        const randomTime = Math.random() * (4000 - 1500) + 1500
        const timeout = setTimeout(() => {
            changebtn()
        }, randomTime)
        
        return function () {
            clearTimeout(timeout)
        }
    }, [mode, startGame])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function startGame() {
        setMode('game')
    }


    function changebtn() {
        const s = performance.now()
        setStartTime(s)
        setPress(true)
    }

    function early() {
        if(isEarly === 1) {
            loseGame()
            return
        }
        setIsEarly(1)
        setMode('start')
        setPress(false)
    }

    function handleClick() {
        const elapsed = performance.now() - startTime
        const decimal = elapsed.toFixed(2)
        const num = parseFloat(decimal)
        setScores(prevState => {
            return [
                ...prevState,
                num
            ]
        })
        setMode('roundResults')
    }

    function nextRound() {
        setPress(false)
        setRoundNum(prevState => prevState + 1)
        startGame()
    }

    function results() {
        setMode('end')
    }

    function loseGame() {
        setMode('lost')
    }

    function newGame() {
        setRoundNum(1)
        setPress(false)
        setScores([])
        setIsEarly(0)
        setMode('game')
    }


    return (
        <div className="reactionTest">
                <h2 className="center">Reaction Test</h2>
                {mode === 'start' && <div>
                    <p className="rules">There will be 5 rounds. Click the button as fast as you can once prompted to. 2 early clicks and you Lose.</p>
                    <button className="startbtn" onClick={startGame}>Start Game</button>
                    </div>}

                {mode === 'game' && <div>
                    <h3>Round {roundNum}/5</h3>
                    {!press && <button className="early" onClick={early}>Don't Click Yet</button>}

                    {press && <button className="click" onClick={handleClick}>Click</button>}
                    </div>}

                    {mode === 'roundResults' && <div className="roundResults">
                            <h3 className="center mDown">{scores[roundNum - 1]}ms</h3>
                            {roundNum < 5 && <button className="nextRound" onClick={nextRound}>Next Round</button>}
                            {roundNum === 5 && <button className="nextRound" onClick={results}>Results</button>}
                    </div>}

                {mode === 'end' && <div>
                        <h2>Results</h2>
                        <ul>
                            <li>{scores[0]}</li>
                            <li>{scores[1]}</li>
                            <li>{scores[2]}</li>
                            <li>{scores[3]}</li>
                            <li>{scores[4]}</li>
                        </ul>
                        <h3>Fastest Time: {Math.min(...scores)}</h3>
                        <h3>Average Time: {
                            (scores[0] + scores[1] + scores[2] + scores[3] + scores[4])/5
                        }</h3>
                    </div>}

                    {mode === 'lost' && <div>
                        <h3>You Clicked to early</h3>
                        <button className="nextRound" onClick={newGame}>Try Again</button>
                        </div>}
        </div>
    )
}