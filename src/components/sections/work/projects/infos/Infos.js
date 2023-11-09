import React from 'react';
import {Technos} from "./Technos";
import {ViewOn} from "./ViewOn";

/**
 * @param {string} title
 * @param {string} description
 * @param {string[]} techs
 * @param {{url: string, github: string}} viewOn
 */
export const Infos = ({title, description, techs, viewOn}) => {
    return <div className="min-h-[300px] w-full lg:w-3/5 xl:w-2/5 flex flex-col justify-between space-x-1 py-3 px-5 sm:py-10 md:py-0 md:px-0">
        <div className="z-30">
            <p className="text-base 2xs:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-orange">{title}</p>
            <p className="text-xs 2xs:text-base md:text-lg lg:text-xl 2xl:text-2xl md:leading-5 mt-4">{description}</p>
        </div>
        <div className="flex flex-col mobile:flex-row md:flex-col xl:flex-row justify-between my-5 z-30">
            <Technos techs={techs}/>
            <ViewOn githubLink={viewOn.github} urlLink={viewOn.url}/>
        </div>
    </div>;
};