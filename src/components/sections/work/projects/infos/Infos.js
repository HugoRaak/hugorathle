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
    return <>
        <div className="info__txt">
            <h2 className="text-4xl text-orange">{title}</h2>
            <p className="text-xl mt-4">{description}</p>
        </div>
        <div className="flex justify-between mb-5">
            <Technos techs={techs}/>
            <ViewOn githubLink={viewOn.github} urlLink={viewOn.url}/>
        </div>
    </>;
};