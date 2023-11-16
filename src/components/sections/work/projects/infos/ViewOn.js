import React from 'react';
import { LinkIcon } from '@components';
import PropTypes from 'prop-types';

export const ViewOn = ({ githubLink, urlLink }) => {
    return (
        <div className="mt-3 mobile:mt-0 md:mt-3 xl:mt-0">
            <p className="text-sm 2xs:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold opacity-30 dark:opacity-60 whitespace-nowrap">
                View on:
            </p>
            <div className="flex justify-start mobile:justify-center md:justify-start xl:justify-center space-x-2 tablet:space-x-5 mt-2">
                {githubLink && <LinkIcon href={githubLink} name="github" className="icon-sm" />}
                {urlLink && <LinkIcon href={urlLink} name="external" className="icon-sm" />}
            </div>
        </div>
    );
};

ViewOn.propTypes = {
    githubLink: PropTypes.string,
    urlLink: PropTypes.string,
};
