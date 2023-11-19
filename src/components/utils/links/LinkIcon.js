import React from 'react';
import { Icon } from '@components/icons';
import PropTypes from 'prop-types';

const LinkIcon = ({ href, name, ariaLabel, ...props }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:scale-125 focus:scale-125 focus:outline-none"
            aria-label={ariaLabel}
        >
            <Icon name={name} {...props} />
        </a>
    );
};

LinkIcon.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
};

export default LinkIcon;
