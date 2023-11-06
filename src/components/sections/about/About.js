import React from "react";
import {SectionTitle} from "@components";
import {Skills} from "./Skills";
import {Content} from "./Content";
import {Resume} from "./Resume";

const About = () => {
    return <section id="about" className="sm:pt-5">
            <SectionTitle>About me</SectionTitle>
        <Content/>
        <div className="my-[10vw]">
            <h6 className="text-center text-lg 2xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl pt-[1%]">My skills</h6>
            <Skills/>
        </div>
        <Resume/>
    </section>
}

export default About;