import React from "react";
import {
    ThemeSwitcherContextProvider,
    Navbar,
    Home,
    About,
    Work,
    Contact,
    Footer,
    ScrollTop
} from "@components";

const IndexPage = () => {
    return <div className="text-dark dark:bg-darkTheme dark:text-white min-h-screen overflow-x-hidden
            transition-colors duration-300 ease-out">
        <ThemeSwitcherContextProvider>
            <Navbar/>
        </ThemeSwitcherContextProvider>
        <div className="pl-[9vw] xs:px-[10vw] transition-filter duration-300 ease-out">
            <Home/>
            <About/>
            <Work/>
            <Contact/>
        </div>
        <Footer/>
        <ScrollTop/>
    </div>;
}

export default IndexPage;

export const Head = () => <title>Hugo Rathle</title>;
