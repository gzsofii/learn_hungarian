import React from "react"
import Word from "./Word"

export default function Usecase(props) {
    const {usecase, examples, exceptions, question_words, note} = props
    return (
        <>
            <span className="usecaseLabel">{usecase}</span>
            <ul>
                {examples && 
                    <li key="exmp" className="example">
                        <strong>examples: </strong>
                        {examples.map((ex, i) => <Word term={ex} key={i}/>).reduce( (acc, curr) => [acc, ', ', curr] )/*list is static, so index can be used as key*/} 
                    </li> }

                {exceptions && 
                    <li key="exc" className="exception">
                        <strong>exceptions: </strong>
                        {exceptions.map((ex, i) => <Word term={ex} key={i}/>).reduce( (acc, curr) => [acc, ', ', curr] )}
                    </li>}

                {question_words && 
                    <li key="qstn" className="qstnWord">
                        <strong>question words: </strong>
                        {question_words.map((ex, i) => <Word term={ex} key={i}/>).reduce( (acc, curr) => [acc, ', ', curr] )}
                    </li> }

                {note && 
                    <li key="note" className="note">
                        <strong>note: </strong>
                        <span>{note}</span>
                    </li>
                }
            </ul>
        </>
    )
}

