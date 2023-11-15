import React, {useEffect, useState} from "react";
import {
    Loader,
    ThemeSwitcherContextProvider,
    Navbar,
    Footer,
    ScrollTop
} from "@components";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({location, children}) => {
    const isIndexPage = location.pathname === "/";
    const [isLoading, setIsLoading] = useState(isIndexPage);
    const finishLoading = () => {
        AOS.init();
        const preferenceTheme = localStorage.getItem("preference-theme");
        if (preferenceTheme === null || preferenceTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        }
        setIsLoading(false);
    };

    useEffect(() => {
        const preferenceTheme = localStorage.getItem("preference-theme");
        if (preferenceTheme === null || preferenceTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, []);

    return <>
        {isLoading ? (
            <Loader finishLoading={finishLoading}/>
        ) : (
            <div className="text-dark dark:bg-darkTheme dark:text-white min-h-screen overflow-x-hidden
            transition-colors duration-300 ease-out">
                <ThemeSwitcherContextProvider>
                    <Navbar isIndexPage={isIndexPage}/>
                </ThemeSwitcherContextProvider>
                <div className="pl-[9vw] xs:px-[10vw] transition-filter duration-300 ease-out">
                    {children}
                </div>
                <Footer/>
                <ScrollTop/>
            </div>
        )}
    </>;
}

export default Layout;