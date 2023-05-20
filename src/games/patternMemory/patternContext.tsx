import React, { createContext, useState } from "react";

const init = {
    guessData: [],
    setGuessData: () => {},
    boardData: [],
    setBoardData: () => {}
} as contextType

const patternContext = createContext(init)

type contextType = {
    guessData: dataType,
    setGuessData: React.Dispatch<React.SetStateAction<dataType>>,
    boardData: dataType,
    setBoardData: React.Dispatch<React.SetStateAction<dataType>>
}

type providerProps = {
    children: React.ReactNode
}

type dataType = {isOn: boolean, id: number}[][]

export function PatternProvider({children}: providerProps) {
    const [guessData, setGuessData] = useState<dataType>([])
    const [boardData, setBoardData] = useState<dataType>([])

    return (
        <patternContext.Provider value={{
            guessData,
            setGuessData,
            boardData,
            setBoardData
        }}>
            {children}
        </patternContext.Provider>
    )
}

export default patternContext