import React from 'react';
import {
    IconBootstrap,
    IconTailwind,
    IconJavascript,
    IconReact,
    IconVue,
    IconPhp,
    IconLaravel,
    IconSql,
    IconC,
    IconPython,
    IconGit,
    IconFigma,
    IconLogo,
} from '@components/icons';

/**
 * @param {String} name
 * @param {Object} props
 */
const Icon = ({ name, ...props }) => {
    switch (name) {
        case 'bootstrap':
            return <IconBootstrap {...props}/>;
        case 'tailwind':
            return <IconTailwind {...props}/>;
        case 'javascript':
            return <IconJavascript {...props}/>;
        case 'react':
            return <IconReact {...props}/>;
        case 'vue':
            return <IconVue {...props}/>;
        case 'php':
            return <IconPhp {...props}/>;
        case 'laravel':
            return <IconLaravel {...props}/>;
        case 'sql':
            return <IconSql {...props}/>;
        case 'c':
            return <IconC {...props}/>;
        case 'python':
            return <IconPython {...props}/>;
        case 'git':
            return <IconGit {...props}/>;
        case 'figma':
            return <IconFigma {...props}/>;
        case 'logo':
            return <IconLogo {...props}/>;
        default:
            return <></>;
    }
};

export default Icon;