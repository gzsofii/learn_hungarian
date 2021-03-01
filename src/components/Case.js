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
                        <div className="caseProperties">
                            <span className="propertyLabel">Suffixes: </span>
                            <Value>{suffixes.join(', ')}</Value>
                        </div>
                    }

                    {meaning && 
                        <div className="caseProperties">
                             <span className="propertyLabel">Meaning: </span>
                             <Value>{meaning}</Value>
                        </div>
                    }

                    {usage && 
                        <div className="caseProperties">
                            <span className="propertyLabel">Usage: </span>
                            <ul className="usage">
                                {usage.map( item => <li key={item.usecase} className="usecase"><Usecase {...item}/></li>)}
                            </ul>
                        </div>
                    }

                    {pers_prons && 
                        <div className="pers-pronouns caseProperties">
                            <span className="propertyLabel">Personal pronouns:</span>
                            <PronounsTable type="pers" pronouns={pers_prons}/>
                        </div>
                    }

                    {dem_prons &&
                        <div className="dem-pronouns caseProperties">
                            <span className="propertyLabel">Demonstrative pronouns: </span>
                            <PronounsTable type="dem" pronouns={dem_prons}/>
                        </div>
                    }
                </div>
            }
            
        </div>
    )
}