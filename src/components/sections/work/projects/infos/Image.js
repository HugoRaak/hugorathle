import {GatsbyImage, getImage} from "gatsby-plugin-image";
import React from "react";

export const Image = ({image, name, href, isEven}) => {
    return <div className="image__link">
        <a href={href} target="_blank" rel="noreferrer"
           className="block rounded-lg absolute md:relative inset-0 md:inset-auto md:outline md:-outline-offset-[2px] md:outline-orange">
            <div className="absolute inset-0 bg-black bg-opacity-[.85] z-10 rounded-lg md:hidden"/>
            <GatsbyImage image={getImage(image)} alt={`screenshot of ${name}`}
                         className={`object-cover h-full w-full md:h-auto md:w-auto rounded-lg transform ${isEven ? 'md:hover:translate-x-2' : 'md:hover:-translate-x-2'} md:hover:-translate-y-2 transition-transform duration-300 ease-out`}/>
        </a>
    </div>;
};