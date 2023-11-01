import React from "react";
import {SectionTitle, LinkButton} from "@components";

const Contact = () => {
    return <div id="contact">
        <div className="pt-5">
            <SectionTitle>Get in touch</SectionTitle>
        </div>
        <h2 className="text-4xl text-center opacity-70 mt-5">Have a project in mind?</h2>
        <div className="text-center py-28">
            <LinkButton location="mailto:rathle.hugo@gmail.com">
                <div className="flex gap-2 py-2">
                    Say hello
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none"
                         className="fill-orange group-hover:fill-black pl-1">
                        <path d="M31.5097 0L0.774414 15L12.3001 18.75L16.1421 30L31.5097 0Z"/>
                    </svg>
                </div>
            </LinkButton>
        </div>
    </div>;
};

export default Contact;