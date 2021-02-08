import React, {useState} from 'react'
import Case from './Case'
import cases from '../data/cases_data.js'

export default function Cases() {
    //const [answersVisible, setAnswersVisible ] = useState(true)
    return (
        <>
         {/*}  {answersVisible 
                ? <button onClick={() => setAnswersVisible(false)}>Hide all answers</button>
                : <button onClick={() => setAnswersVisible(true)}>Show all answers</button>
           }
        */ }
           <div>
               {cases.map( item => <Case key={item.name} {...item}/> ) }
           </div>
            
        </>
    )
}