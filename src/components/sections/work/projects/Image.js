import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({ image, href, title, isEven }) => {
    return (
        <div className="rounded-lg bg-orange">
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-lg absolute md:relative inset-0 md:inset-auto focus:outline-none focus:shadow-black focus:shadow-[0_10px_30px_-10px_rgba(16,16,16,0.7)] dark:focus:shadow-[0_20px_30px_-10px_rgba(16,16,16,0.7)] md:focus:shadow-none md:dark:focus:shadow-none"
                aria-label="Project Link"
            >
                <div
                    className="absolute inset-0 bg-gray-100 bg-opacity-[.9] dark:bg-black dark:bg-opacity-[.85] z-10 rounded-lg md:hidden
                            transition-all duration-300 ease-out"
                    aria-hidden={true}
                />
                <GatsbyImage
                    image={getImage(image)}
                    alt={`Screenshot of project ${title}`}
                    className={`object-cover h-full w-full md:h-auto md:w-auto rounded-lg transform ${
                        isEven
                            ? 'md:group-hover:translate-x-2 md:group-focus:translate-x-2'
                            : 'md:group-hover:-translate-x-2 md:group-focus:-translate-x-2'
                    } md:group-hover:-translate-y-2 md:group-focus:-translate-y-2 transition-transform duration-300 ease-out`}
                />
            </a>
        </div>
    );
};

Image.propTypes = {
    image: PropTypes.object.isRequired,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isEven: PropTypes.bool.isRequired,
};
