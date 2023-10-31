import React from "react";
import {Separator} from "@components/Separator";
import {Skills} from "./Skills";
import {Content} from "./Content";
import {Resume} from "./Resume";

export const About = () => {
    return <div id="about">
        <div className="flex flex-col items-center justify-center pt-5">
            <Separator/>
            <h2 className="z-10 text-4xl bg-white dark:bg-darkTheme -mt-[1.40rem] px-0.5">
                About me
            </h2>
        </div>
        <Content/>
        <h2 className="text-center text-4xl pt-[1%]">My skills</h2>
        <Skills/>
        <Resume/>
    </div>
}