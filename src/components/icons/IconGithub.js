import React from 'react';
import PropTypes from 'prop-types';

const IconGithub = ({ className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 42 41"
            fill="none"
            className={className}
        >
            <title>GitHub</title>
            <path
                d="M20.833 0a20.834 20.834 0 0 0-6.588 40.599c1.042.182 1.432-.443 1.432-.99 0-.494-.026-2.135-.026-3.88-5.234.964-6.588-1.276-7.005-2.448A7.576 7.576 0 0 0 6.51 30.34c-.729-.391-1.77-1.355-.026-1.38a4.17 4.17 0 0 1 3.204 2.135 4.453 4.453 0 0 0 6.067 1.718 4.38 4.38 0 0 1 1.328-2.786c-4.635-.52-9.479-2.318-9.479-10.286a8.108 8.108 0 0 1 2.136-5.6 7.487 7.487 0 0 1 .208-5.52s1.745-.547 5.73 2.135a19.64 19.64 0 0 1 10.416 0c3.984-2.708 5.729-2.135 5.729-2.135a7.486 7.486 0 0 1 .208 5.52 8.06 8.06 0 0 1 2.136 5.6c0 7.994-4.87 9.765-9.506 10.286a4.934 4.934 0 0 1 1.407 3.854c0 2.787-.026 5.026-.026 5.73 0 .546.39 1.197 1.432.989A20.844 20.844 0 0 0 20.834 0Z"
                fill="#000"
                className="transition-fill dark:fill-white"
            />
        </svg>
    );
};

IconGithub.propTypes = {
    className: PropTypes.string,
};

export default IconGithub;
