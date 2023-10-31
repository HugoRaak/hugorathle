import React from "react";

/**
 * @param {number} height
 * @param {String} className
 */
const IconVue = ({height = 100, className = ""}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={height * 1.16} height={height} viewBox="0 0 100 87" fill="none" className={className}>
        <title>Vue.js</title>
        <path d="M20.3101 0.358765L38.2804 0.365561L50.0272 19.864L61.7327 0.367123L79.6874 0.36267L50.1171 51.6556L20.3101 0.358765Z" fill="#35495E"/>
        <path d="M0.711426 0.495976L20.2942 0.362305L50.0997 51.6576L79.6716 0.365429L99.2888 0.385977L50.0966 84.8079L0.711426 0.495976Z" fill="#41B883"/>
    </svg>;
}

export default IconVue;
