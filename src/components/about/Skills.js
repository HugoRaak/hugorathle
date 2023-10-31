import React from "react";
import {StaticImage} from "gatsby-plugin-image";

export const Skills = () => {
    return <div className="flex flex-col justify-center items-center px-5 pt-10">
        <div className="flex gap-4 py-5">
            <StaticImage title="Bootstrap" src="../../images/skills/bootstrap.png" alt="Logo Bootstrap" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="Tailwind CSS" src="../../images/skills/tailwind.png" alt="Logo Tailwind CSS" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="JavaScript" src="../../images/skills/javascript.png" alt="Logo JavaScript" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="Vite" src="../../images/skills/vite.png" alt="Logo Vite" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="Alpine.js" src="../../images/skills/alpinejs.png" alt="Logo Alpine.js" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="React" src="../../images/skills/react.png" alt="Logo React" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="Next.js" src="../../images/skills/nextjs.png" alt="Logo Next.js" placeholder="blurred"
                         className="skill"/>
        </div>
        <div className="flex gap-4 py-5">
            <StaticImage title="PHP" src="../../images/skills/php.png" alt="Logo PHP" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="Laravel" src="../../images/skills/laravel.png" alt="Logo Laravel" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="Database management, SQL" src="../../images/skills/sql.png" alt="Logo SQL" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="C" src="../../images/skills/c.png" alt="Logo C" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="Python" src="../../images/skills/python.png" alt="Logo Python" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="Git" src="../../images/skills/git.png" alt="Logo Git" placeholder="blurred"
                         className="skill"/>
            <StaticImage title="Figma" src="../../images/skills/figma.png" alt="Logo Figma" placeholder="blurred"
                         className="skill"/>
        </div>
    </div>
}