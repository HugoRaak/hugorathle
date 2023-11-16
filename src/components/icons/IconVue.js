import React from 'react';
import PropTypes from 'prop-types';

const IconVue = ({ className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="116"
            height="100"
            viewBox="0 0 100 87"
            fill="none"
            className={className}
        >
            <title>Vue.js</title>
            <path
                d="m20.31.359 17.97.007 11.747 19.498L61.733.367 79.687.363l-29.57 51.293L20.31.359Z"
                fill="#35495E"
            />
            <path
                d="M.711.496 20.294.362 50.1 51.658 79.672.365l19.617.021-49.192 84.422L.71.496Z"
                fill="#41B883"
            />
        </svg>
    );
};

IconVue.propTypes = {
    className: PropTypes.string,
};

export default IconVue;
