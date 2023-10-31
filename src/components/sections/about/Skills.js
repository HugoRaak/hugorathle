import React from "react";
import {Icon} from "@components/icons";

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
]

export const Skills = () => {
    const halfLength = skills.length / 2;
    const skillRow1 = skills.slice(0, halfLength);
    const skillRow2 = skills.slice(halfLength, skills.length);

    return <div className="flex flex-col justify-center items-center px-5 pt-10">
        <div className="flex gap-4 py-5">
            {skillRow1.map((skill, i) => <Icon key={i} name={skill} />)}
        </div>
        <div className="flex gap-4 py-5">
            {skillRow2.map((skill, i) => <Icon key={i} name={skill} />)}
        </div>
    </div>;
}