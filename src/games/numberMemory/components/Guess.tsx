import React, { useContext } from "react";
import numberContext from "../context/NumberContext";

type GuessProps = {
    setStage: React.Dispatch<React.SetStateAction<string>>,
    guess: number,
    setGuess: React.Dispatch<React.SetStateAction<number>>
}

export default function Guess({ setStage, guess, setGuess }: GuessProps) {
    const { number } = useContext(numberContext)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let t = e.target
        setGuess(parseInt(t.value))
    }

    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStage('check')
        checkGuess()
    }

    function checkGuess() {
        if(guess === number) {
            //correct
        } else {
            //wrong
        }
    }


    return (
        <div className="guess">
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    value={guess}
                    onChange={handleChange}
                    placeholder='Guess'
                />
                <button>Submit Guess</button>
            </form>
        </div>
    )
}