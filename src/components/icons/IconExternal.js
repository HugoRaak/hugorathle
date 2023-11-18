import React from 'react';
import PropTypes from 'prop-types';

const IconExternal = ({ className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            width="90"
            height="90"
            viewBox="0 0 20 20"
            fill="none"
            className={className}
        >
            <title>External link</title>
            <path
                d="M16 11v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6m4-3h6m0 0v6m0-6L8 12"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-stroke dark:stroke-white"
            />
        </svg>
    );
};

IconExternal.propTypes = {
    className: PropTypes.string,
};

export default IconExternal;
