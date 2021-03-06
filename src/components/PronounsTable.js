import React from 'react'
import Value from './Value'

export default function PronounsTable(props) {
    const {pronouns} = props

    const orig_pronouns = props.type === "pers" 
            ?  ["én", "te", "ő", "mi", "ti", "ők", "Ön", "Önök"]
            :  ["ez", "az" ]

    const rows = orig_pronouns.map( (orig, i) => {
            return (
                <tr key={i}>
                    <td>{orig}</td>
                    <td><Value>{pronouns[i]}</Value></td>
                </tr>
            )
        })

    return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        
    )
}