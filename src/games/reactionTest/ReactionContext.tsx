import React, { useState } from "react";
import { createContext } from "react";


const init = {
    roundNum: 1,
    setRoundNum: (number: number) => {}
}
const reactionContext = createContext(init)

type providerProps = {
    children: React.ReactNode
}
export function ReactionProvider({children}: providerProps) {
    const [roundNum, setRoundNum] = useState(1)
    return (
        <reactionContext.Provider value={
            {
            roundNum,
            setRoundNum
        }
        }>
            {children}
        </reactionContext.Provider>
    )
}

export default reactionContext