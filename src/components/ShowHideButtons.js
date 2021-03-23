import React from "react"
import  {MODE} from '../context/ModeContext'

export default function ShowHideButtons({setMode}) {
    return (
        <div className="topButtons">
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
        </div>
    )
}