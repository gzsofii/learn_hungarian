import React from "react"

const ModeContext = React.createContext()


const MODE = {
    showAll: "showAll",
    hideAll: "hideAll",
    none: "none"
}
//OBject.freeze ?


export default ModeContext
export {MODE}