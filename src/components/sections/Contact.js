import React from 'react';
import { SectionTitle, SectionSubTitle, LinkButton } from '@components';

const Contact = () => {
    return (
        <section id="contact">
            <div className="pt-5">
                <SectionTitle>Get in touch</SectionTitle>
            </div>
            <SectionSubTitle>Have a project in mind?</SectionSubTitle>
            <div className="text-center py-28 lg:py-40" data-aos="fade-up" data-aos-duration="1000">
                <LinkButton
                    href="mailto:rathle.hugo@gmail.com"
                    aria-label="Send Email"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="flex space-x-[1vw] py-[0.5vw]">
                        <p>Say hello</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="30"
                            viewBox="0 0 32 30"
                            fill="none"
                            className="fill-orange group-hover:fill-black group-focus:fill-black w-auto h-3 2xs:h-4 xs:h-5 tablet-xs:h-6 sm:h-7 md:h-8 lg:h-9 pl-1 2xs:mt-1 tablet-xs:mt-0"
                        >
                            <path d="M31.51 0 .774 15 12.3 18.75 16.142 30 31.51 0Z" />
                        </svg>
                    </div>
                </LinkButton>
            </div>
        </section>
    );
};

export default Contact;
