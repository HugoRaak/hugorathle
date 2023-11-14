import * as React from "react";

/**
 * @param {string} className
 * @param {Object} style
 */
const Separator = ({className = "", style = {}}) => {
    return <div className={"h-0.5 w-screen rounded radial-gradient " + className} style={style}/>
}

export default Separator;