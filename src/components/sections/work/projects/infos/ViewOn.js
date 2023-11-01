import React from 'react';
import {IconExternal, IconGithub} from "@components/icons";

/**
 * @param {String|null} githubLink
 * @param {String|null} urlLink
 */
export const ViewOn = ({githubLink, urlLink}) => {
    return <div className="info__view-on">
        <h5 className="text-xl font-bold opacity-30 dark:opacity-60">View on:</h5>
        <div className="flex justify-center gap-5 mt-2">
            {githubLink && <Link href={githubLink}>
                <IconGithub height={40}/>
            </Link>}
            {urlLink && <Link href={urlLink}>
                <IconExternal height={40}/>
            </Link>}
        </div>
    </div>;
};

const Link = ({href, children}) => {
    return <a href={href} target="_blank" rel="noreferrer" className="hover:scale-125">
        {children}
    </a>;
}