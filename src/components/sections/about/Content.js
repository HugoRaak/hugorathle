import React from "react";
import {StaticImage} from "gatsby-plugin-image";

export const Content = () => {
    return <div className="flex items-center justify-center px-[10%] py-[5%]">
        <p className="w-1/2 text-lg">
            Hello there! <br/>I'm Hugo, pseudo Raak, a young passionate full-stack developer
            and a student at an engineering school. I started my journey as a developer
            a few years ago when I found out how much I enjoyed coding. I then discovered
            the world of the web, which immediately fascinated me with its endless
            possibilities. I am driven by my passion for creating innovative projects on the
            web and contributing to the dynamic realm of web development. I find pleasure in
            dedicating time to explore emerging technologies and mastering their applications.
        </p>
        <StaticImage src="../../../images/about_img.png" alt="Image of code" placeholder="blurred"/>
    </div>;
};