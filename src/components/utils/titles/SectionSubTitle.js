import React from 'react';
import PropTypes from 'prop-types';

const SectionSubTitle = ({ children }) => {
    return (
        <h3
            className="text-lg 2xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-center mt-5 t"
            data-aos="opacity07-fade-up"
            data-aos-duration="1000"
        >
            {children}
        </h3>
    );
};

SectionSubTitle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SectionSubTitle;
