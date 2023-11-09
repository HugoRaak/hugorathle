import React from "react";
import {SectionTitle} from "@components";
import {Projects} from "./projects/Projects";

const Work = () => {
    return <section id="work">
        <div className="pt-5 mt-[10%]">
            <SectionTitle>My works</SectionTitle>
        </div>
        <h6 className="text-lg 2xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-center opacity-70 mt-5">Projects I've worked on:</h6>
        <Projects/>
    </section>;
};

export default Work;