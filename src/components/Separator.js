import * as React from "react";

/**
 * @param {string} className
 */
const Separator = ({className}) => {
    return <div className={"h-0.5 w-screen rounded radial-gradient " + className}/>
}

export default Separator;