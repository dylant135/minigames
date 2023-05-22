import React, { useContext, useEffect } from "react";
import Tile from "./Tile";
import { time } from "console";
import patternContext from "../patternContext";

type BoardProps = {
    round: number,
    setMode: React.Dispatch<React.SetStateAction<string>>,
    mode: string
}

export default function Board({ round, setMode, mode}: BoardProps) {
    const {boardData, setBoardData } = useContext(patternContext) 
    const displayBoard = boardData.map(t => {
        const row = t.map(x => {
            return (
                <Tile isOn={x.isOn} id={x.id} />
            )
        })
        return row
    })

    useEffect(() => {
        if(mode !== 'game') return
        generateBoard()
        const timeout = setTimeout(() => {
            setMode('guess')
        }, 5000)

        return function () {
            clearTimeout(timeout)
        }
    }, [mode])

    function generateBoard() {
        let index = 0
        let arr: {isOn: boolean, id: number}[][] = []
        for(let i = 0; i < 6; i++) {
            const n: {isOn: boolean, id: number}[] = []
            for(let j = 0; j < 6; j++) {
                const ranNum = Math.random() * 10
                let isOn = false
                if(ranNum > 7) {
                    isOn = true
                }
                n.push({
                    isOn,
                    id: index
                })
                index++
            }
            arr.push(n)
        }
        setBoardData(arr)
    }

    return (
        <div className="board">
            {displayBoard}
        </div>
    )
}