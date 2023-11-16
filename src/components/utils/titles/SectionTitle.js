import React from 'react';
import { Separator } from '@components';
import PropTypes from 'prop-types';

const SectionTitle = ({ children }) => {
    return (
        <div
            className="flex flex-col items-center justify-center pt-5"
            data-aos="fade-right"
            data-aos-duration="1000"
        >
            <Separator />
            <h5
                className="text-lg 2xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl z-10 bg-white dark:bg-darkTheme
                       -mt-[1.05rem] 2xs:-mt-[1.40rem] lg:-mt-[1.80rem] px-0.5 transition-colors duration-300 ease-out"
            >
                {children}
            </h5>
        </div>
    );
};

SectionTitle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SectionTitle;
