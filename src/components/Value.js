import React, {useContext, useEffect, useState} from 'react'
import ModeContext, {MODE} from './../context/ModeContext'

export default function Value(props) {
    const mode = useContext(ModeContext)
    const [hidden, setHidden] = useState(mode === MODE.showAll ? false : true)

    useEffect(() => {
            console.log("mode changed to ", mode); 
            if (mode === MODE.showAll) setHidden(false)
            else if (mode === MODE.hideAll) setHidden(true)
        }, [mode])

    //console.log(hidden)
    return (
        hidden 
            ? <span className="hiddenValue" onClick={() => setHidden(!hidden)}></span> 
            : <span className="value" onClick={() => setHidden(!hidden)}>{props.children}</span>
    )
}