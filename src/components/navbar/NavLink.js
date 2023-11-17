import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export const NavLink = ({ location, onClick, children, style = {}, tabIndex = 0 }) => {
    return (
        <Link
            to={location}
            className="link text-2xl opacity-75 transition-opacity duration-300 ease-out hover:opacity-100 focus:opacity-100"
            style={style}
            onClick={onClick}
            tabIndex={tabIndex}
        >
            <span className="relative">{children}</span>
        </Link>
    );
};

NavLink.propTypes = {
    location: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    tabIndex: PropTypes.number,
};
