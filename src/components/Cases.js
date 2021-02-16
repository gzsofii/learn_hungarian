import React, {useEffect, useState} from 'react'
import Case from './Case'
import ModeContext, {MODE} from './../context/ModeContext'
import cases from '../data/cases_data.js'


export default function Cases() {
    const [mode, setMode] = useState({visibility: MODE.hideAll, changed: false})
     //mode is an object, because this way if we click on hide all, then click on some Values to make them show up, and then again click hide all,
     // then in Value in useEffect it will detect as mode has changed (even though it's the same object).
     // If it is only a string, the useEffect won't run as it doesn't detect change in mode

   /* useEffect(() => {
        setMode({changed: false})
    }, [mode])*/
    return (
        <>
            <div>
               <button onClick={() => setMode({visibility: MODE.showAll, changed: true})}>Show all answers</button>
               <button onClick={() => setMode({visibility: MODE.hideAll, changed: true})}>Hide all answers</button>
            </div>
            <ModeContext.Provider value={mode}>
                {console.log("Update ModeContext")}
                <div>
                    {cases.map( item => <Case key={item.name} {...item}/> ) }
                </div>
            </ModeContext.Provider>   
        </>
    )
}