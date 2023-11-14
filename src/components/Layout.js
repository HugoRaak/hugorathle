import React, {useState} from "react";
import {
    Loader,
    ThemeSwitcherContextProvider,
    Navbar,
    Footer,
    ScrollTop
} from "@components";

const Layout = ({children, location}) => {
    const isHome = location.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);
    const finishLoading = () => {
        const preferenceTheme = localStorage.getItem("preference-theme");
        if (preferenceTheme === null || preferenceTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        }
        setIsLoading(false)
    };

    return <>
        {isLoading && isHome ? (
            <Loader finishLoading={finishLoading}/>
        ) : (
            <div className="text-dark dark:bg-darkTheme dark:text-white min-h-screen overflow-x-hidden
            transition-colors duration-300 ease-out">
                <ThemeSwitcherContextProvider>
                    <Navbar/>
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