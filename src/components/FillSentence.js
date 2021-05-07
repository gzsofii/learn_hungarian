import React, {useState, useEffect} from "react"
import AnswerInput from './AnswerInput'

export default function FillSentence(props) {
    const {sentence, words, solution, meaning, checked} = props
 
    console.log("fillsentence")
    let wr;
    const regex = /(__|_)/g;
    let k = 0;
    wr = sentence.split(regex).map(part => {
        let ret;
        if (part === "__" || part === "_"){
            let bigSize = part === "__" ? true : false;
            ret = <AnswerInput solution={solution[k]} bigSize={bigSize} checked={checked}/>
            k++
        }
        else ret = part
        return ret
    })
    console.log(wr)
    
    return (<>
        <span>{wr}</span>
        <span> ({words})</span>
        </>
    )
}