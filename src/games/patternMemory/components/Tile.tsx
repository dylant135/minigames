import React from "react";

type TileProps = {
    isOn: boolean
}

export default function Tile({isOn}: TileProps) {
    console.log(isOn)

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        const e = event.target
        console.log(e)
    }

    return (
        <div className="tile" onClick={handleClick} style={isOn ? {backgroundColor: 'black'} : {backgroundColor: 'white'}}>
            {isOn}
        </div>
    )
}