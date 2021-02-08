import React, {useState} from 'react'
import Value from './Value'
import Usecase from './Usecase'
import PronounsTable from './PronounsTable'

export default function Case(props) {
    const [hidden, setHidden] = useState(true)

    const {name, suffixes, meaning, pers_prons, dem_prons, usage} = props

    return (
        <>
            <h1 
                onClick={() => setHidden(!hidden)}>
                {name.slice(0,1).toUpperCase() + name.slice(1)}
            </h1>
            
            { !hidden && 
                <div>
                    {suffixes && <div>Suffixes: <Value>{suffixes.join(', ')}</Value></div>}
                    {meaning && <div>Meaning: <Value>{meaning}</Value></div>}

                    {usage && <div>Usage: 
                        <ul>
                            {usage.map( item => <li key={item.usecase}><Usecase {...item}/></li>)}
                        </ul>
                    </div>}

                    <div>Personal pronouns:
                        <PronounsTable type="pers" pronouns={pers_prons}/>
                    </div>

                    <div>Demonstrative pronouns:
                        <PronounsTable type="dem" pronouns={dem_prons}/>
                    </div>
                </div>
            }
            
        </>
    )
}