import React from 'react';
import PropTypes from 'prop-types';

const IconTailwind = ({ className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="167"
            height="100"
            viewBox="0 0 167 100"
            fill="none"
            className={className}
        >
            <title>Tailwind CSS</title>
            <path
                d="M137.23 29.29a35.095 35.095 0 0 1-15.885-11.144A47.99 47.99 0 0 0 83.17.098a39.256 39.256 0 0 0-41.585 33.268 26.864 26.864 0 0 1 29.11-12.392A35.929 35.929 0 0 1 86.58 32.202 47.99 47.99 0 0 0 124.755 50a39.255 39.255 0 0 0 41.585-33.268 26.62 26.62 0 0 1-29.11 12.559ZM29.11 70.71a35.097 35.097 0 0 1 15.885 11.144A47.989 47.989 0 0 0 83.17 99.902a39.256 39.256 0 0 0 41.585-33.268 26.866 26.866 0 0 1-29.11 12.392A35.93 35.93 0 0 1 79.76 67.798 48.239 48.239 0 0 0 41.585 50 39.256 39.256 0 0 0 0 83.268a26.614 26.614 0 0 1 29.11-12.559Z"
                fill="#16BECB"
            />
        </svg>
    );
};

IconTailwind.propTypes = {
    className: PropTypes.string,
};

export default IconTailwind;
