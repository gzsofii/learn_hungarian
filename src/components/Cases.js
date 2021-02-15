import React, {useState} from 'react'
import Case from './Case'
import ModeContext, {MODE} from './../context/ModeContext'
import cases from '../data/cases_data.js'


export default function Cases() {
    const [mode, setMode] = useState(MODE.hideAll) 
    return (
        <>
            <div>
               <button onClick={() => setMode(MODE.showAll)}>Show all answers</button>
               <button onClick={() => setMode(MODE.hideAll)}>Hide all answers</button>
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