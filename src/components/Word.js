import React from "react"
import WordWithMeaning from './WordWithMeaning' 

export default function Word(props) {
    const {term} = props

    return (
        <>
        {typeof(term) === 'object'
            ? <WordWithMeaning {...term}/>
            : <span className="word">{term}</span>
        }
        </>
    )
}