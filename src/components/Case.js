import React, {useState} from 'react'
import Value from './Value'
import Usecase from './Usecase'
import PronounsTable from './PronounsTable'

export default function Case(props) {
    const [hidden, setHidden] = useState(true)

    const {name, suffixes, meaning, pers_prons, dem_prons, usage} = props

    return (
        <div className="case" >
            <h1 
                onClick={() => setHidden(!hidden)}>
                {name.slice(0,1).toUpperCase() + name.slice(1)}
            </h1>
            
            { !hidden && 
                <div>
                    {suffixes && 
                        <div>
                            <span className="property">Suffixes: </span>
                            <Value>{suffixes.join(', ')}</Value>
                        </div>
                    }

                    {meaning && 
                        <div>
                             <span className="property">Meaning: </span>
                             <Value>{meaning}</Value>
                        </div>
                    }

                    {usage && 
                        <div>
                            <span className="property">Usage: </span>
                            <ul className="usage">
                                {usage.map( item => <li key={item.usecase} className="usecase"><Usecase {...item}/></li>)}
                            </ul>
                        </div>
                    }

                    <div className="pers-pronouns">
                        <span className="property">Personal pronouns:</span>
                        <PronounsTable type="pers" pronouns={pers_prons}/>
                    </div>

                    <div className="dem-pronouns">
                        <span className="property">Demonstrative pronouns: </span>
                        <PronounsTable type="dem" pronouns={dem_prons}/>
                    </div>
                  
                </div>
            }
            
        </div>
    )
}