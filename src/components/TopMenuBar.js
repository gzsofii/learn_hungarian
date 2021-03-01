import React from "react"
import  {MODE} from './../context/ModeContext'

export default function TopMenuBar({setMode}) {
    return (
        <header className="topMenuBar">
            <span 
                className="topButton"
                onClick={() => setMode({visibility: MODE.showAll})}>
                Show all answers
            </span>
            
            <span 
                className="topButton" 
                onClick={() => setMode({visibility: MODE.hideAll})}>
                Hide all answers
            </span>
        </header>
    )
}