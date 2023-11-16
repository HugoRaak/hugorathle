import * as React from 'react';
import PropTypes from 'prop-types';

const Separator = ({ className = '', style = {} }) => {
    return <div className={'h-0.5 w-screen rounded radial-gradient ' + className} style={style} />;
};

Separator.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Separator;
