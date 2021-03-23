import React from "react"
//import Exercise from "./Exercise.js"
import exercises from "../data/exercises/definite-indefinite"

export default function Exercises() {
    return (
        <>
            <h1>Exercises</h1>
            <h2>Definite-Indefinite conjugation</h2>
            <ol>
            {exercises.map( item => {
                let arr = item.sentence.split("_")
                return <li>{arr[0]}<input type="text"/>{`${arr[1]} (${item.words})` } </li>
                })
            }
            </ol>
        </>

    )
}