import React from 'react';
import { Infos } from './infos/Infos';
import { Image } from './infos/Image';
import PropTypes from 'prop-types';

export const Project = ({ project, isEven }) => {
    const imageHref = project.viewOn.url ?? project.viewOn.github ?? '#';

    return (
        <li
            className="relative md:flex md:items-center md:space-x-[3vw] xl:space-x-16 my-24"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            {isEven && (
                <Image
                    image={project.image}
                    name={project.title}
                    href={imageHref}
                    isEven={isEven}
                />
            )}
            <Infos
                title={project.title}
                description={project.description}
                techs={project.tech}
                viewOn={project.viewOn}
            />
            {!isEven && (
                <Image
                    image={project.image}
                    name={project.title}
                    href={imageHref}
                    isEven={isEven}
                />
            )}
        </li>
    );
};

Project.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tech: PropTypes.arrayOf(PropTypes.string).isRequired,
        viewOn: PropTypes.shape({
            url: PropTypes.string,
            github: PropTypes.string,
        }).isRequired,
        image: PropTypes.object.isRequired,
    }).isRequired,
    isEven: PropTypes.bool.isRequired,
};
