import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function GameList() {
    return (
        <ul className="gameList">
            <li><strong>Game List</strong></li>
            <hr></hr>
            <Link to=''><li className="gameItem">Game 1</li></Link>
            <li className="gameItem">Game 2</li>
            <li className="gameItem">Game 3</li>
            <li className="gameItem">Game 4</li>
        </ul>
    )
}