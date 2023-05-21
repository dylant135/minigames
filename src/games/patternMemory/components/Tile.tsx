import React, { useContext } from "react";
import patternContext from "../patternContext";

type TileProps = {
    isOn: boolean,
    id: number,
}

export default function Tile({isOn, id }: TileProps) {
    const { guessData, setGuessData } = useContext(patternContext)
 
    function handleClick() {
       /* let theTile = []
        for(let i = 0; i < guessData.length; i++) {
            const filtered = guessData[i].filter(x => x.id === id)
            if(filtered.length === 1) {
                theTile.push(filtered)
            } else {
                console.log('hmm', filtered)
            }
        }*/
        const newArr = guessData.map(r => {
            let filtered = r.filter(x => x.id === id)

            if(filtered.length === 1) {
                filtered[0].isOn = !filtered[0].isOn
                const newRow = r.map(x => {
                    if(x.id === filtered[0].id) {
                        return filtered[0]
                    }
                    return x
                }) 
                return newRow
            } else {
                return r
            }
        })

        
        setGuessData(newArr)
    }

    return (
        <div className="tile" onClick={handleClick} style={isOn ? {backgroundColor: 'black'} : {backgroundColor: 'white'}}>
            {isOn}
        </div>
    )
}