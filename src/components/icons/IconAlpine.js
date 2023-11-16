import React from 'react';
import PropTypes from 'prop-types';

const IconAlpine = ({ className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 128 128"
            fill="none"
            className={className}
        >
            <title>Alpine.js</title>
            <path
                fill="#77c1d2"
                fillRule="evenodd"
                d="M98.444 35.562 126 62.997 98.444 90.432 70.889 62.997z"
                clipRule="evenodd"
            />
            <path
                fill="#2d3441"
                fillRule="evenodd"
                d="m29.556 35.562 57.126 56.876H31.571L2 62.997z"
                clipRule="evenodd"
            />
        </svg>
    );
};

IconAlpine.propTypes = {
    className: PropTypes.string,
};

export default IconAlpine;
