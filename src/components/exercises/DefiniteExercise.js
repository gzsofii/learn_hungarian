import React from "react"
import FillSentenceExercises from "../FillSentenceExercises"
import exercises from "../../data/exercises/definite-indefinite"

export default function DefiniteExercise() {
    return (
        <FillSentenceExercises title="Definite-Indefinite Exercise" data={exercises}/>
    )
}