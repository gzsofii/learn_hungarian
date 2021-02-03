import React, {useState} from 'react'

export default function Value(props) {
    const [hidden, setHidden] = useState(true)
    return (
        hidden 
            ? <span className="hiddenValue" onClick={() => setHidden(!hidden)}></span> 
            : <span className="value" onClick={() => setHidden(!hidden)}>{props.children}</span>
    )
}