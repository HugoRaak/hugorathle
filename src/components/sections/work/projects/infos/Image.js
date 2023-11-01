import {GatsbyImage, getImage} from "gatsby-plugin-image";
import React from "react";

export const Image = ({image, name, href, isEven}) => {
    return <div className="image__link">
        <a href={href} target="_blank" rel="noreferrer"
           className="block rounded-lg outline -outline-offset-[2px] outline-orange">
            <GatsbyImage image={getImage(image)} alt={`screenshot of ${name}`}
                         className={`image__link rounded-lg 
                               transform ${isEven ? 'hover:translate-x-2' : 'hover:-translate-x-2'} hover:-translate-y-2
                               transition-transform duration-300 ease-out`}/>
        </a>
    </div>;
};