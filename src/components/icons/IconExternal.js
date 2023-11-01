import React from "react";

/**
 * @param {number} height
 * @param {String} className
 */
const IconExternal = ({height = 100, className = ""}) => {
    const trueHeight = height * 0.90;
    return <svg xmlns="http://www.w3.org/2000/svg" width={trueHeight} height={trueHeight} viewBox="0 0 20 20" fill="none" className={className}>
        <title>External link</title>
        <g clipPath="url(#clip0_575_483)">
            <path d="M16 11V17C16 17.5304 15.7893 18.0391 15.4142 18.4142C15.0391 18.7893 14.5304 19 14 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V6C1 5.46957 1.21071 4.96086 1.58579 4.58579C1.96086 4.21071 2.46957 4 3 4H9M13 1H19M19 1V7M19 1L8 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-white"/>
        </g>
        <defs>
            <clipPath id="clip0_575_483">
                <rect width={trueHeight} height={trueHeight} fill="black" className="dark:fill-white"/>
            </clipPath>
        </defs>
    </svg>;
}

export default IconExternal;
