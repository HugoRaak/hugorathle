import React from 'react';
import { Icon } from '@components/icons';
import PropTypes from 'prop-types';

export const Technos = ({ techs }) => {
    return (
        <div className="info__techs">
            <h5 className="text-sm 2xs:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold">
                Technologies used:
            </h5>
            <ul className="flex space-x-2 tablet-xs:space-x-5 mt-2">
                {techs.map((tech, i) => (
                    <li key={i}>
                        <Icon name={tech} className="icon-sm" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

Technos.propTypes = {
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
