import React from 'react';
import PropTypes from 'prop-types';

const IconLinkedin = ({ className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            width="100"
            height="100"
            viewBox="0 0 42 42"
            fill="none"
            className={className}
        >
            <title>Linkedin</title>
            <path
                d="M38.354 0H3.063A3.02 3.02 0 0 0 0 2.98v35.708a3.02 3.02 0 0 0 3.063 2.979h35.291a3.02 3.02 0 0 0 3.063-2.98V2.98A3.021 3.021 0 0 0 38.354 0ZM12.563 34.875h-6.25v-18.75h6.25v18.75ZM9.437 13.5a3.25 3.25 0 1 1 0-6.5 3.271 3.271 0 1 1 0 6.5Zm25.667 21.375h-6.25V24.813c0-2.521-.896-4.167-3.166-4.167a3.438 3.438 0 0 0-3.209 2.271 4.166 4.166 0 0 0-.208 1.52v10.418h-6.25v-18.75h6.25v2.645a6.25 6.25 0 0 1 5.646-3.125c4.166 0 7.187 2.688 7.187 8.459v10.791Z"
                fill="#000"
                className="transition-fill dark:fill-white"
            />
        </svg>
    );
};

IconLinkedin.propTypes = {
    className: PropTypes.string,
};

export default IconLinkedin;
