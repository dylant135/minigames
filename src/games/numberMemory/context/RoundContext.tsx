import React, { createContext, useState } from "react";

type rcType = {
    roundNum: number,
    setRoundNumber: React.Dispatch<React.SetStateAction<number>>,
    mode: string,
    setMode: React.Dispatch<React.SetStateAction<string>>
}

const RoundContext = createContext<{rcType} || {}>({})


export type childProps = {
    children: React.ReactNode
}

export function RoundContextProvider({ children }: childProps) {

    const [roundNum, setRoundNum] = useState(0)
    const [mode, setMode] = useState('start')

    return (
        <RoundContext.Provider value={
            {
                roundNum: roundNum,
                setRoundNum: setRoundNum,
                mode: mode,
                setMode: setMode
            }
        }>
            {children}
        </RoundContext.Provider>
    )
}

export default RoundContext