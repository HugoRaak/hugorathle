import React from 'react';
import { Icon } from '@components/icons';

/**
 * @param {string[]} techs
 */
export const Technos = ({ techs }) => {
    return (
        <div className="info__techs">
            <p className="text-sm 2xs:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold">Technologies used:</p>
            <div className="flex space-x-2 tablet-xs:space-x-5 mt-2">
                {techs.map((tech, i) => (
                    <Icon key={i} name={tech} className="h-5 xs:h-6 tablet:h-7 sm:h-8 md:h-9 lg:h-10 w-auto" />
                ))}
            </div>
        </div>
    );
};
