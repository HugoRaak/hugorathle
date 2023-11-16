import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({ image, name, href, isEven }) => {
    return (
        <div className="image__link">
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg absolute md:relative inset-0 md:inset-auto md:outline md:-outline-offset-[2px] md:outline-orange"
            >
                <div
                    className="absolute inset-0 bg-gray-100 bg-opacity-[.9] dark:bg-black dark:bg-opacity-[.85] z-10 rounded-lg md:hidden
                            transition-all duration-300 ease-out"
                />
                <GatsbyImage
                    image={getImage(image)}
                    alt={`screenshot of ${name}`}
                    className={`object-cover h-full w-full md:h-auto md:w-auto rounded-lg transform ${
                        isEven ? 'md:hover:translate-x-2' : 'md:hover:-translate-x-2'
                    } md:hover:-translate-y-2 transition-transform duration-300 ease-out`}
                />
            </a>
        </div>
    );
};

Image.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    isEven: PropTypes.bool.isRequired,
};
