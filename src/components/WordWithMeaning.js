import React, {useState} from "react";

export default function WordWithMeaning(props) {
    const {word, meaning} = props

    const [isHovering, setIsHovering] = useState(false)
    const [cursorPos, setCursorPos] = useState([0,0])

    return (
        <>      
                <span 
                    className="wordWmeaning" 
                    onMouseEnter={(event) => {setIsHovering(true); setCursorPos([event.clientX, event.clientY])}} 
                    onMouseLeave={() => {setIsHovering(false)}}>
                    {word}
                </span>
                {isHovering && <div className="meaning" style={{ top: cursorPos[1]-40, left: cursorPos[0]}}>{meaning}</div>}
              </>
    )
}