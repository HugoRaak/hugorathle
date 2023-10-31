import React from 'react';
import {Separator} from "@components";

const SectionTitle = ({children}) => {
    return <div className="flex flex-col items-center justify-center pt-5">
        <Separator/>
        <h2 className="z-10 text-4xl bg-white dark:bg-darkTheme -mt-[1.40rem] px-0.5">
            {children}
        </h2>
    </div>;
};

export default SectionTitle;