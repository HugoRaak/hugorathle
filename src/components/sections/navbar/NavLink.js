import * as React from "react";

/**
 * @param {string} location
 * @param {JSX.Element} children
 * @param {Object} style
 */
const NavLink = ({location, children, style = {}}) => {
    return <a href={location} className="text-2xl" style={style}>
        <span className="link relative transition-opacity duration-300 opacity-75 hover:opacity-100">
            {children}
        </span>
    </a>
}

export default NavLink;