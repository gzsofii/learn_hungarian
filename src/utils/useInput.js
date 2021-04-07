import React, {useState} from 'react'

export default function useInput(init) {
    const [value, setValue] = useState(init)
    //console.log("useInput, value: ", value)
    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {setValue(event.target.value)},
        }    
    }
}