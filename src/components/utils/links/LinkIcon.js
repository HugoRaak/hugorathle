import React from 'react';
import { Icon } from '@components/icons';
import PropTypes from 'prop-types';

const LinkIcon = ({ href, name, ...props }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group hover:scale-125 focus:scale-125 focus:outline-none"
        >
            <Icon name={name} {...props} />
        </a>
    );
};

LinkIcon.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default LinkIcon;
