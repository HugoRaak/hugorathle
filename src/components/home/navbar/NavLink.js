import * as React from "react";

/**
 * @param {string} location
 * @param {JSX.Element} children
 */
export const NavLink = ({location, children}) => {
    return <a href={location} className="text-2xl">
        <span className="link relative transition-opacity duration-300 opacity-75 hover:opacity-100">
            {children}
        </span>
    </a>
}