import React from 'react';
import { Infos } from './infos/Infos';
import { Image } from './Image';
import PropTypes from 'prop-types';

export const Project = ({ project, isEven }) => {
    const imageHref = project.viewOn.url ?? project.viewOn.github ?? '#';
    const image = (
        <Image image={project.image} href={imageHref} title={project.title} isEven={isEven} />
    );

    return (
        <li
            className="relative md:flex md:items-center md:space-x-[3vw] xl:space-x-16 my-24"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            {isEven && image}
            <Infos
                title={project.title}
                description={project.description}
                techs={project.tech}
                viewOn={project.viewOn}
            />
            {!isEven && image}
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
