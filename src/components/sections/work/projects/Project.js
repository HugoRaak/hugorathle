import React from "react";
import {Infos} from "./infos/Infos";
import {Image} from "./infos/Image";

/**
 * @param {{
 *      title: string,
 *      description: string,
 *      tech: string[],
 *      viewOn: {url: string, github: string},
 *      image: Object,
 * }} project
 * @param {boolean} isEven
 */
export const Project = ({project, isEven}) => {
    const imageHref = project.viewOn.url ?? project.viewOn.github ?? '#';

    return <li className="relative md:flex md:items-center md:space-x-[3vw] xl:space-x-16 my-32">
        {isEven && <Image image={project.image} name={project.title}
                          href={imageHref} isEven={isEven}/>}
        <Infos title={project.title} description={project.description}
               techs={project.tech} viewOn={project.viewOn}/>
        {!isEven && <Image image={project.image} name={project.title}
                           href={imageHref} isEven={isEven}/>}
    </li>;
};