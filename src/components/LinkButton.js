import React from "react";

/**
 * @param {() => void} onClick
 * @param {JSX.Element} children
 */
const LinkButton = ({location, children , ...props}) => {
    return <a href={location} className="group inline-block rounded border-2 border-orange hover:bg-orange" {...props}>
        <div className="text-2xl font-semibold px-4 pt-1.5 pb-1 group-hover:text-black">{children}</div>
    </a>;
};

export default LinkButton;