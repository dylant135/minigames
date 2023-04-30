import React, {createContext, useState} from "react";
import { childProps } from "./RoundContext";

const initContext = {
    number: 0,
    setNumber: (number: number) => {},
    isNumSet: false,
    setIsNumSet: (boolean: boolean) => {}
}

const numberContext = createContext(initContext)

export function NumberContextProvider({ children }: childProps) {

    const [number, setNumber] = useState(0)
    const [isNumSet, setIsNumSet] = useState(false)

    return (
        <numberContext.Provider value={
            {
                number,
                setNumber,
                isNumSet,
                setIsNumSet
            }
        }>
            {children}
        </numberContext.Provider>
    )
}

export default numberContext