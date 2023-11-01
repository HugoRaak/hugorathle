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

    return <div className="flex gap-16 my-32">
        {isEven && <Image image={project.image} name={project.title} href={imageHref} isEven={isEven}/>}
        <div className="w-2/5 flex flex-col justify-between">
            <Infos title={project.title} description={project.description}
                   techs={project.tech} viewOn={project.viewOn}/>
        </div>
        {!isEven && <Image image={project.image} name={project.title} href={imageHref} isEven={isEven}/>}
    </div>;
};