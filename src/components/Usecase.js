import React from "react"
import Word from "./Word"

export default function Usecase(props) {
    const {usecase, examples, exceptions, question_words} = props
    return (
        <>
            <span className="usecase">{usecase}:</span>
            <ul>
                {examples && 
                <li>{`examples: `}
                     {examples.map(ex => <Word term={ex}/>).reduce( (acc, curr) => [acc, ', ', curr] )} 
                </li> }

                {exceptions && 
                <li>{`exceptions: `}
                    {exceptions.map(ex => <Word term={ex}/>).reduce( (acc, curr) => [acc, ', ', curr] )}
                </li> }

                {question_words && 
                <li>{`question words: `}
                    {question_words.map(ex => <Word term={ex}/>).reduce( (acc, curr) => [acc, ', ', curr] )}
                </li> }
            </ul>
        </>
    )
}

