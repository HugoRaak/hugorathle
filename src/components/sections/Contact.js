import React from "react";
import {SectionTitle, LinkButton} from "@components";

const Contact = () => {
    return <section id="contact">
        <div className="pt-5">
            <SectionTitle>Get in touch</SectionTitle>
        </div>
        <h2 className="text-lg 2xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-center opacity-70 mt-5">Have a project in mind?</h2>
        <div className="text-center py-28 lg:py-40">
            <LinkButton location="mailto:rathle.hugo@gmail.com">
                <div className="flex space-x-[1vw] py-[0.5vw]">
                    <p>Say hello</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none"
                         className="fill-orange group-hover:fill-black w-auto h-3 2xs:h-4 xs:h-5 tablet-xs:h-6 sm:h-7 md:h-8 lg:h-9 pl-1 2xs:mt-1 tablet-xs:mt-0">
                        <path d="M31.5097 0L0.774414 15L12.3001 18.75L16.1421 30L31.5097 0Z"/>
                    </svg>
                </div>
            </LinkButton>
        </div>
    </section>;
};

export default Contact;