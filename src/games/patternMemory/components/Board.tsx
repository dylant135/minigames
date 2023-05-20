import React, { useEffect } from "react";
import Tile from "./Tile";
import { time } from "console";

type BoardProps = {
    boardData: {isOn: boolean, id: number}[][],
    round: number
    setBoardData: React.Dispatch<React.SetStateAction<{
        isOn: boolean;
        id: number;
    }[][]>>,
    setMode: React.Dispatch<React.SetStateAction<string>>,
    mode: string
}

export default function Board({boardData, setBoardData, round, setMode, mode}: BoardProps) {
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
        for(let i = 0; i < 7; i++) {
            const n: {isOn: boolean, id: number}[] = []
            for(let j = 0; j < 7; j++) {
                const ranNum = Math.random() * 10
                let isOn = false
                if(ranNum > 6.5) {
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