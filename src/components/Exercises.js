import React from "react"
//import Exercise from "./Exercise.js"
import exercises from "../data/exercises/definite-indefinite"

export default function Exercises(props) {
    return (
        <>
            <div className="topButtons">
                <span className="topButton">Check</span>
            </div>
            <h1>{props.title}</h1>
            
            {console.log(exercises)}
            <ol>
                {props.data.map( item => {
                    let arr = item.sentence.split("_")
                    return <li>{arr[0]}<input type="text"/>{`${arr[1]} (${item.words})` } </li>
                    })
                }
            </ol>
        </>
    )
}