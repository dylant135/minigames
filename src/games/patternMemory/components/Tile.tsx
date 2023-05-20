import React, { useContext } from "react";
import patternContext from "../patternContext";

type TileProps = {
    isOn: boolean,
    id: number,
}

export default function Tile({isOn, id }: TileProps) {
    const { guessData, setGuessData } = useContext(patternContext)
 
    function handleClick() {
        let theTile = []
        for(let i = 0; i < guessData.length; i++) {
            const filtered = guessData[i].filter(x => x.id === id)
            if(filtered.length === 1) {
                theTile.push(filtered)
            } else {
                console.log('hmm', filtered)
            }
        }

        
        setGuessData(prevState => {
            return (
                ...prevstate,

            )
        })
    }

    return (
        <div className="tile" onClick={handleClick} style={isOn ? {backgroundColor: 'black'} : {backgroundColor: 'white'}}>
            {isOn}
        </div>
    )
}