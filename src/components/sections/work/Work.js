import React from 'react';
import { SectionTitle, SectionSubTitle } from '@components';
import { Projects } from './projects/Projects';

const Work = () => {
    return (
        <section id="work">
            <div className="pt-5 mt-[10%]">
                <SectionTitle>My works</SectionTitle>
            </div>
            <SectionSubTitle>Projects I&rsquo;ve worked on:</SectionSubTitle>
            <Projects />
        </section>
    );
};

export default Work;
