import React , {useState} from "react"
import FillSentence from "./FillSentence.js"

export default function FillSentenceExercises(props) {
    const [checked, setChecked] = useState(false)
    return (
        <>
            <div className="topButtons">
                <span className="topButton" onClick={() => setChecked(true)}>Check</span>
            </div>
            <h1>{props.title}</h1>
            
            <ol className="exercisesList">
                {
                    props.data.map( item => {
                       // let arr = item.sentence.split("_")       
                        return <li><FillSentence sentence={item.sentence} words={item.words} solution={item.solution} meaning={item.meaning} checked={checked}/></li>
                        
                        //return <li><FillSentence firstPart={arr[0]} secondPart={arr[1]} words={item.words} solution={item.solution} meaning={item.meaning} checked={checked}/></li>
                    })
                }
            </ol>
        </>
    )
}