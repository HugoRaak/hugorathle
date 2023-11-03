import React from "react";
import {SectionTitle} from "@components";
import {Skills} from "./Skills";
import {Content} from "./Content";
import {Resume} from "./Resume";

const About = () => {
    return <section id="about">
        <div className="pt-5">
            <SectionTitle>About me</SectionTitle>
        </div>
        <Content/>
        <h2 className="text-center text-4xl pt-[1%]">My skills</h2>
        <Skills/>
        <Resume/>
    </section>
}

export default About;