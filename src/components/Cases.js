import React, { useState} from 'react'
import Case from './Case'
import TopMenuBar from './TopMenuBar'
import ModeContext, {MODE} from './../context/ModeContext'
import cases from '../data/cases_data.js'


export default function Cases() {
    const [mode, setMode] = useState({visibility: MODE.hideAll})
     //mode is an object, because this way if we click on hide all, then click on some Values to make them show up, and then again click hide all,
     // then in Value in useEffect it will detect as mode has changed (even though it's the same object).
     // If it is only a string, the useEffect won't run as it doesn't detect change in mode

   /* useEffect(() => {
        setMode({changed: false})
    }, [mode])*/
    return (
        <>
            <TopMenuBar setMode={setMode}/>
            <ModeContext.Provider value={mode}>
                {console.log("Update ModeContext")}
                <div className="casesContainer">
                    {cases.map( item => <Case key={item.name} {...item}/> ) }
                </div>
            </ModeContext.Provider>   
        </>
    )
}