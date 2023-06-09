import React from "react";
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <h1>MiniGames</h1>
            <ul className="navContainer">
                <NavLink to='/' ><button type="button" className="navbtn">
                    Home</button></NavLink>

                <NavLink to='/profile' ><button type="button" className="navbtn">
                    Profile</button></NavLink>
            </ul>
            
        </nav>
    )
}