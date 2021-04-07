import React from "react"
import useInput from '../utils/useInput'

export default function FillSentence(props) {
    const {value, bind, reset} = useInput("")
    const {firstPart, secondPart, words, solution,meaning,checked} = props
    
    if (!checked) {
        return <span>{firstPart} <input type="text" {...bind}/> {secondPart + " (" + words + ")"}</span>
    } 
    else {
        const answer = value.toUpperCase() === solution.toUpperCase()
            ? <span className="correctAnswer">
                {firstPart + " " + solution + " " + secondPart + " (" + words + ")"}
              </span>
            : <span className="wrongAnswer">
                {firstPart + " "}
                <span className="givenWrongAnswer">{value}</span>
                {" " + solution + " " + secondPart + " (" + words + ") "}
              </span>
        return (
            <>{answer} 
            <span className="tooltip">
                <img src={process.env.PUBLIC_URL + '/img/information.png'} className="icon"></img>
                <span className="tooltipText">{meaning}</span>
            </span>
            </>
        )
    }

}