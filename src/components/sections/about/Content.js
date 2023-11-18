import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Content = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-4 my-[10vw]">
            <p className="sm:w-1/2 text-xs 2xs:text-base md:text-lg lg:text-xl 2xl:text-2xl">
                Hello there! <br />
                I&rsquo;m Hugo, pseudo Raak, a young passionate full-stack developer and a student
                at an engineering school.
                <br className="sm:hidden lg:block" />I started my journey as a developer a few years
                ago when I found out how much I enjoyed coding.
                <br className="sm:hidden lg:block" />I then discovered the world of the web, which
                immediately fascinated me with its endless possibilities.
                <br className="sm:hidden lg:block" />I am driven by my passion for creating
                innovative projects on the web and contributing to the dynamic realm of web
                development.
                <br className="sm:hidden lg:block" />I find pleasure in dedicating time to explore
                emerging technologies and mastering their applications.
            </p>
            <StaticImage
                src="../../../images/about_coding.jpg"
                alt="Image of a computer on a table with code on its screen"
                placeholder="blurred"
                className="rounded-lg w-1/2 hidden sm:flex"
            />
        </div>
    );
};
