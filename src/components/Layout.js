import React, {useState} from "react";
import {
    Loader,
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
            document.documentElement.dataset.theme = 'dark';
        }
        setIsLoading(false);
    };

    return <>
        {isLoading ? (
            <Loader finishLoading={finishLoading}/>
        ) : (
            <div className="text-dark dark:bg-darkTheme dark:text-white min-h-screen overflow-x-hidden
            transition-colors duration-300 ease-out">
                <Navbar isIndexPage={isIndexPage}/>
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