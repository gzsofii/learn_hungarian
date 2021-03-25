import React, {useState, useContext} from 'react'
import Value from './Value'
import Usecase from './Usecase'
import PronounsTable from './PronounsTable'
import ModeContext, {MODE} from './../context/ModeContext'

export default function Case(props) {
    const [hidden, setHidden] = useState(true)
    const mode = useContext(ModeContext)

    const {name, suffixes, image, meaning,  phrases, notes, pers_prons, dem_prons, usage} = props

    const img_path = process.env.PUBLIC_URL + '/img/thumbnails/'
    console.log(img_path)
    return (
        <div className="case" >
            <h2 
                onClick={() => setHidden(!hidden)}>
                {name.slice(0,1).toUpperCase() + name.slice(1)}
                {image && mode.visibility === MODE.showAll && 
                    <img src={img_path + image}/>
                }
            </h2>
            
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
                                {usage.map( (item, i) => <li key={i} className="usecase"><Usecase {...item}/></li>) /*list is static, so index can be used as key*/}
                            </ul>
                        </div>
                    }

                    {phrases && 
                        <div className="caseProperties">
                            <span className="propertyLabel">Some phrases: </span>
                            <ul>
                                {phrases.map( (item, i) => <li key={i}><Value>{item.word}</Value>: {item.meaning}</li>)}
                            </ul>
                        </div>
                    } 

                    {notes && 
                        <div className="caseProperties">
                            <span className="propertyLabel">Notes: </span>
                            <ul>
                                {notes.map( (item,i) => <li key={i}>{item}</li>)}
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