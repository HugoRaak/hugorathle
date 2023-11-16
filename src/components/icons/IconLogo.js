import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = ({ className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 100 101"
            fill="none"
            className={className}
        >
            <title>Logo</title>
            <path
                d="M35.405 14.947c1.81-2.121 5.282-.841 5.282 1.947v38.54a1 1 0 0 1-1 1H21.68c-8.533 0-13.146-10-7.606-16.491l21.331-24.996Z"
                fill="#D67300"
            />
            <path
                d="M84.742 35.525c2.121 1.81.841 5.282-1.947 5.282l-38.54-.002a1 1 0 0 1-1-1V21.797c.001-8.534 10.002-13.146 16.492-7.606l24.995 21.333Z"
                fill="#D67300"
            />
            <path
                d="M64.592 84.86c-1.81 2.12-5.282.84-5.282-1.948l.003-38.54a1 1 0 0 1 1-1H78.32c8.533.001 13.145 10.002 7.605 16.493L64.592 84.859Z"
                fill="#D67300"
            />
            <path
                d="M15.348 64.709c-2.12-1.81-.84-5.282 1.948-5.282l38.54.003a1 1 0 0 1 1 1l-.001 18.007c0 8.533-10.001 13.145-16.492 7.605L15.348 64.71Z"
                fill="#D67300"
            />
        </svg>
    );
};

IconLogo.propTypes = {
    className: PropTypes.string,
};

export default IconLogo;
