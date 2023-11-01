import React from 'react';
import {Icon} from "@components/icons";

/**
 * @param {string[]} techs
 */
export const Technos = ({techs}) => {
    return <div className="info__techs">
        <h5 className="text-xl font-bold">Technologies used:</h5>
        <div className="grid grid-cols-5 gap-3 mt-2">
            {techs.map((tech, i) => <Icon key={i} name={tech} height={40}/>)}
        </div>
    </div>;
};