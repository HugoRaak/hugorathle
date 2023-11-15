import React from "react";
import {Icon} from "@components/icons";

/**
 * @param {string} href
 * @param {string} name
 * @param {mixin} props
 */
const LinkIcon = ({href, name, ...props}) => {
    return <a href={href} target="_blank" rel="noreferrer" className="hover:scale-125">
        <Icon name={name} {...props}/>
    </a>;
}

export default LinkIcon;