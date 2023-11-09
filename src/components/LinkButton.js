import React from "react";

/**
 * @param {() => void} onClick
 * @param {JSX.Element} children
 */
const LinkButton = ({location, children , ...props}) => {
    return <a href={location} className="group inline-block rounded border xs:border-2 border-orange hover:bg-orange hover:scale-[1.1] transition-all duration-300 ease-out" {...props}>
        <div className="text-xs 2xs:text-base xs:text-lg tablet-xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold px-[4vw] md:px-[3vw] lg:px-8 pt-1.5 pb-1 group-hover:text-black">{children}</div>
    </a>;
};

export default LinkButton;