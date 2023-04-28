import React, { createContext, useState } from "react";

type rcType = {
    roundNum: number,
    setRoundNumber: React.Dispatch<React.SetStateAction<number>>
}

const context = {
    roundNum: 0,
    setRoundNumber: () => {}
} as rcType

const RoundContext = createContext(context)


export type childProps = {
    children: React.ReactNode
}

export function RoundContextProvider({ children }: childProps) {

    const [roundNum, setRoundNum] = useState(0)

    return (
        <RoundContext.Provider value={
            {
                roundNum: roundNum,
                setRoundNumber: setRoundNum
            }
        }>
            {children}
        </RoundContext.Provider>
    )
}

export default RoundContext