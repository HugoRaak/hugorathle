import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export const NavLink = ({ location, onClick, children, style = {} }) => {
    return (
        <Link to={location} className="text-2xl" style={style} onClick={onClick}>
            <span className="link relative transition-opacity duration-300 opacity-75 hover:opacity-100">
                {children}
            </span>
        </Link>
    );
};

NavLink.propTypes = {
    location: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};
