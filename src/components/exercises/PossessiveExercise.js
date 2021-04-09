import React from "react"
import FillSentenceExercises from "../FillSentenceExercises"
import exercises from "../../data/exercises/possessive"

export default function PossessiveExercise() {
    return (
        <FillSentenceExercises title="Possessive Exercise" data={exercises}/>
    )
}