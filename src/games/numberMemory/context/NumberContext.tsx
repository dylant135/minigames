import React, {createContext, useState} from "react";
import { childProps } from "./RoundContext";

const initContext = {
    number: 0,
    setNumber: (number: number) => {},
    isNumSet: false,
    setIsNumSet: (boolean: boolean) => {},
    guess: 0,
    setGuess: (number: number) => {}
}

const numberContext = createContext(initContext)

export function NumberContextProvider({ children }: childProps) {

    //generated number
    const [number, setNumber] = useState(0)
    const [isNumSet, setIsNumSet] = useState(false)

    //guessed number
    const [guess, setGuess] = useState(0)

    return (
        <numberContext.Provider value={
            {
                number,
                setNumber,
                isNumSet,
                setIsNumSet,
                guess,
                setGuess
            }
        }>
            {children}
        </numberContext.Provider>
    )
}

export default numberContext