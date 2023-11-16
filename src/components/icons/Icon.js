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
    IconAlpine,
    IconLivewire,
    IconGithub,
    IconExternal,
    IconLinkedin,
    IconDiscord,
    IconDefault,
} from '@components/icons';
import PropTypes from 'prop-types';

const Icon = ({ name, ...props }) => {
    switch (name) {
        case 'bootstrap':
            return <IconBootstrap {...props} />;
        case 'tailwind':
            return <IconTailwind {...props} />;
        case 'javascript':
            return <IconJavascript {...props} />;
        case 'react':
            return <IconReact {...props} />;
        case 'vue':
            return <IconVue {...props} />;
        case 'php':
            return <IconPhp {...props} />;
        case 'laravel':
            return <IconLaravel {...props} />;
        case 'sql':
            return <IconSql {...props} />;
        case 'c':
            return <IconC {...props} />;
        case 'python':
            return <IconPython {...props} />;
        case 'git':
            return <IconGit {...props} />;
        case 'figma':
            return <IconFigma {...props} />;
        case 'alpine':
            return <IconAlpine {...props} />;
        case 'livewire':
            return <IconLivewire {...props} />;
        case 'github':
            return <IconGithub {...props} />;
        case 'external':
            return <IconExternal {...props} />;
        case 'linkedin':
            return <IconLinkedin {...props} />;
        case 'discord':
            return <IconDiscord {...props} />;
        default:
            return <IconDefault title={name} {...props} />;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    ...PropTypes.object,
};

export default Icon;
