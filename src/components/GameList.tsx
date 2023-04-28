import React, { useRef } from "react";
import { Link } from 'react-router-dom'

export default function GameList() {
    //enter new games here
    const list = useRef<string[]>(['numbermemory'])

    const displayList = list.current.map(l => {
        return (
            <Link to={'/game/' + l} key={l}><button className="gameItem" type="button">{l}</button></Link>
        )
    })
    return (
        <ul className="gameList">
            <li><strong>Game List</strong></li>
            <hr></hr>
            {displayList}
        </ul>
    )
}