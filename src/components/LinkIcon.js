import React from "react";
import {Icon} from "./icons";

const LinkIcon = ({href, name, ...props}) => {
    return <a href={href} target="_blank" rel="noreferrer" className="hover:scale-125">
        <Icon name={name} {...props}/>
    </a>;
}

export default LinkIcon;