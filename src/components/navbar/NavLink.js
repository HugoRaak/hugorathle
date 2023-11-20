import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const NavLink = ({ location, onClick, children, style = {} }) => {
    return (
        <Link
            to={location}
            className="nav-link text-2xl opacity-75 transition-opacity duration-300 ease-out hover:opacity-100 focus:opacity-100"
            style={style}
            onClick={onClick}
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
};

export default NavLink;
