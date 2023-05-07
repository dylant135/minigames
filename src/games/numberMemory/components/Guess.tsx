import React, { useContext, useState } from "react";
import numberContext from "../context/NumberContext";

type GuessProps = {
    setStage: React.Dispatch<React.SetStateAction<string>>,
}

export default function Guess({ setStage }: GuessProps) {
    const  { setGuess} = useContext(numberContext)

    const [formData, setFormData] = useState(0)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let t = e.target
        setFormData(parseInt(t.value))
    }

    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setGuess(formData)
        setStage('check')
    }


    return (
        <div className="guess">
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    value={formData}
                    onChange={handleChange}
                    placeholder='Number'
                    className="guessInput"
                />
                <button className='gamebtn'>Submit Guess</button>
            </form>
        </div>
    )
}