import React from 'react';

const SectionSubTitle = ({ children }) => {
    return (
        <h6
            className="text-lg 2xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-center opacity-70 mt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            {children}
        </h6>
    );
};

export default SectionSubTitle;
