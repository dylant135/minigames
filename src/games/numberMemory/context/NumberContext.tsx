import React, {createContext, useState} from "react";
import { childProps } from "./RoundContext";

const numberContext = createContext({})

export function NumberContextProvider({ children }: childProps) {

    const [number, setNumber] = useState(0)

    return (
        <numberContext.Provider value={
            {
                number: number,
                setNumber: setNumber
            }
        }>
            {children}
        </numberContext.Provider>
    )
}

export default numberContext