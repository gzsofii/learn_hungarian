import React from "react"

export default function Word(props) {
    const {term} = props

    return (
        <>
        {typeof(term) === 'object'
            ? <span className="tooltip">{term.word}<span className="tooltipText">{term.meaning}</span></span>
            : <span>{term}</span>
        }
        </>
    )
}