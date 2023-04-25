import React from "react";
import { Outlet } from "react-router-dom";

export default function Game() {
    return (
        <div className="game">
               <Outlet />
        </div>
    )
}