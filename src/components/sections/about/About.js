import React from 'react';
import { SectionTitle } from '@components';
import { Skills } from './Skills';
import { Content } from './Content';
import { Resume } from './Resume';

const About = () => {
    return (
        <section id="about" className="sm:pt-5">
            <div data-oas-offset="5000px">
                <SectionTitle>About me</SectionTitle>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
                <Content />
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
                <div className="my-[10vw]">
                    <h3 className="text-center text-lg 2xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl pt-[1%]">
                        My skills
                    </h3>
                    <Skills />
                </div>
                <Resume />
            </div>
        </section>
    );
};

export default About;
