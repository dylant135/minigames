import React, { useState } from "react";

export default function ReactionTest() {
    const [roundNum, setRoundNum] = useState(1)
    const [mode, setMode] = useState('start')
    const [press, setPress] = useState(false)
    const [startTime, setStartTime] = useState(0)
    const [scores, setScores] = useState<number[]>([])

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

    function nextGame() {
        setPress(false)
        setRoundNum(prevState => prevState + 1)
        startGame()
    }

    function results() {
        setMode('end')
    }

    return (
        <div className="reactionTest">
                <h2 className="center">Reaction Test</h2>
                {mode === 'start' && <button className="gamebtn" onClick={startGame}>Start Game</button>}

                {mode === 'game' && <div>
                    <h3>Round {roundNum}/5</h3>
                    {!press && <button className="early" onClick={early}>Don't Click Yet</button>}

                    {press && <button className="click" onClick={handleClick}>Click</button>}
                    </div>}

                    {mode === 'roundResults' && <div className="roundResults">
                            <h3 className="center">{scores[roundNum - 1]}</h3>
                            {roundNum < 5 && <button onClick={nextGame}>Next Round</button>}
                            {roundNum === 5 && <button onClick={results}>Results</button>}
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
        </div>
    )
}