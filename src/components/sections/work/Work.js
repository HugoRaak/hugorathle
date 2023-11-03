import React from "react";
import {SectionTitle} from "@components";
import {Projects} from "./projects/Projects";

const Work = () => {
    return <section id="work">
        <div className="pt-5 mt-[10%]">
            <SectionTitle>My works</SectionTitle>
        </div>
        <h2 className="text-4xl text-center opacity-70 mt-5">Projects I've worked on:</h2>
        <Projects/>
    </section>;
};

export default Work;