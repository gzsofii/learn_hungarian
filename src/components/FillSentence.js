import React, {useState, useEffect} from "react"
import useInput from '../utils/useInput'

export default function FillSentence(props) {
    const {sentence, words, solution,meaning,checked} = props
    
    //const {value, bind, reset} = useInput("")
    const [answers, setAnswers] = useState([])
   // console.log("answers: ", answers)
    let wr;
    const regex = /(__|_)/g;
    useEffect( () => {
        let k = 0;
        wr = sentence.split(regex).map(part => {
            let ret;
            if (part === "__" || part === "_"){
                setAnswers("".concat(answers))
                ret = <input type="text"
                    solution={solution[k++]}
                    value={answers[k++]}
                    //onChange={setAnswers("")}
                    style={part==="__" ? {width: '100px', margin:'0 5px' } : {width: '20px'}}
                />
            }
            //else if (part === "_") ret = <input type="text" value={solution[k++][0]} style={{width: '20px'}} />
            else ret = part
            return ret
        })
    },[])
    //console.log("KKKKKKKKK", k, sentence)
    /*for (let i = 1; i < parts.length; i=i+2) {
        let style = parts[i] === "_" ? "width: 20px" : "width: 100px";
        return
    }*/
    
    if (!checked) {
        
        return <span>
                {wr}

              
              { /* sentence.replaceAll(regex, match => {
                    //let txt = match === "__" ? ".." + solution[i][0] : solution[i][0]
                    let style  = match === "__" ? "width: 20px" : "width: 50px";
                    i++;
                    let ret = <input type="text" style={style} />
                    console.log(ret)
                    return ret;
                })*/}
                
                </span>
        
        
        
        //return <span>{firstPart} <input type="text" {...bind}/> {secondPart + " (" + words + ")"}</span>
        //return <span>{parts.map(item => item + <input type="text" {...bind}/>)}</span>
        //return <span>{sentence.replace("_", <input type="text" style="width: 30px" />)}</span>
    } 
    else {
        /*const answer = value.toUpperCase() === solution.toUpperCase()
            ? <span className="correctAnswer">
                {firstPart + " " + solution + " " + secondPart + " (" + words + ")"}
              </span>
            : <span className="wrongAnswer">
                {firstPart + " "}
                <span className="givenWrongAnswer">{value}</span>
                {" " + solution + " " + secondPart + " (" + words + ") "}
              </span>
        return (
            <>{answer} 
            <span className="tooltip">
                <img src={process.env.PUBLIC_URL + '/img/information.png'} className="icon"></img>
                <span className="tooltipText">{meaning}</span>
            </span>
            </>
        )
        */
    }

}