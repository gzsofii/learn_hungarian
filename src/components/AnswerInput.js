import React, {useState} from 'react'

export default function AnswerInput(props)  {
    const {solution, bigSize, checked} = props

    const [value, setValue] = useState("")
    if (!checked) return (
        <input type="text" 
            value={value} 
            style={bigSize? {width: '60px', margin: '0 6px'} : {width: '25px', margin: '0 6px 0 0'}}
            onChange={(event)=>setValue(event.target.value)}
        />
    )
    else {
        let correct = solution.includes(value);
        return (
            <span className={correct ? 'correctAnswer' : 'wrongAnswer'}>{value ? value : "_"}</span>

        )
    }
}