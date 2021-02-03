import React from "react"

export default function Usecase(props) {
    const {usecase, examples, exceptions, question_words} = props.data
    return (
        <>
            {usecase}:
            <ul>
                {examples && <li>examples: {examples.join(', ')}</li> }
                {exceptions && <li>exceptions: {exceptions.join(', ')}</li> }
                {question_words && <li>question words: {question_words.join(', ')}</li> }
            </ul>
        </>
    )
}

