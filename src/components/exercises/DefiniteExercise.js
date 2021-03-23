import React from "react"
import Exercises from "../Exercises"
import exercises from "../../data/exercises/definite-indefinite"

export default function DefiniteExercise() {
    return (
        <Exercises title="Definite-Indefinite Exercise" data={exercises}/>
    )
}