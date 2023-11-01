import React from 'react';
import {LinkIcon} from "@components";

/**
 * @param {String|null} githubLink
 * @param {String|null} urlLink
 */
export const ViewOn = ({githubLink, urlLink}) => {
    return <div className="info__view-on">
        <h5 className="text-xl font-bold opacity-30 dark:opacity-60">View on:</h5>
        <div className="flex justify-center gap-5 mt-2">
            {githubLink && <LinkIcon href={githubLink} name="github" height={40}/>}
            {urlLink && <LinkIcon href={urlLink} name="external" height={40}/>}
        </div>
    </div>;
};