import React from 'react';
import PropTypes from 'prop-types';

const IconFigma = ({ className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            width="68"
            height="100"
            viewBox="0 0 68 100"
            fill="none"
            className={className}
        >
            <title>Figma</title>
            <path
                d="M17.198 100c9.2 0 16.667-7.467 16.667-16.667V66.667H17.198c-9.2 0-16.666 7.466-16.666 16.666S7.998 100 17.198 100Z"
                fill="#0ACF83"
            />
            <path
                d="M.532 50c0-9.2 7.466-16.667 16.666-16.667h16.667v33.334H17.198C7.998 66.667.532 59.2.532 50Z"
                fill="#A259FF"
            />
            <path
                d="M.532 16.667C.532 7.467 7.998 0 17.198 0h16.667v33.333H17.198c-9.2 0-16.666-7.466-16.666-16.666Z"
                fill="#F24E1E"
            />
            <path
                d="M33.865 0h16.667c9.2 0 16.666 7.467 16.666 16.667 0 9.2-7.466 16.666-16.666 16.666H33.865V0Z"
                fill="#FF7262"
            />
            <path
                d="M67.198 50c0 9.2-7.466 16.667-16.666 16.667S33.865 59.2 33.865 50c0-9.2 7.467-16.667 16.667-16.667 9.2 0 16.666 7.467 16.666 16.667Z"
                fill="#1ABCFE"
            />
        </svg>
    );
};

IconFigma.propTypes = {
    className: PropTypes.string,
};

export default IconFigma;
