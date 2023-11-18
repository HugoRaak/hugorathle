import React from 'react';
import { Icon } from '@components/icons';

const skills = [
    'bootstrap',
    'tailwind',
    'javascript',
    'react',
    'vue',
    'php',
    'laravel',
    'sql',
    'c',
    'python',
    'git',
    'figma',
];

export const Skills = () => {
    const halfLength = skills.length / 2;
    const skillRow1 = skills.slice(0, halfLength);
    const skillRow2 = skills.slice(halfLength, skills.length);

    return (
        <div className="flex flex-col justify-center items-center pt-1 xs:pt-5 tablet:pt-10">
            <ul className="flex py-[2vw] lg:py-5">
                {skillRow1.map((skill, i) => (
                    <li key={i}>
                        <Icon name={skill} className="h-[10vw] lg:h-auto w-auto px-[1vw]" />
                    </li>
                ))}
            </ul>
            <ul className="flex py-[2vw] lg:py-5">
                {skillRow2.map((skill, i) => (
                    <li key={i}>
                        <Icon name={skill} className="h-[10vw] lg:h-auto w-auto px-[1vw]" />
                    </li>
                ))}
            </ul>
        </div>
    );
};
