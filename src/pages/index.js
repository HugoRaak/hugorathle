import React from "react";
import {
    SidebarMenuContextProvider,
    ThemeSwitcherContextProvider,
    Navbar,
    SidebarMenu,
    Home,
    About,
    Work,
    Contact,
    Footer
} from "@components";

const IndexPage = () => {
    return <div className="text-dark dark:bg-darkTheme dark:text-white min-h-screen overflow-x-hidden
            transition-colors transition-background duration-300 ease-out">
        <SidebarMenuContextProvider>
            <ThemeSwitcherContextProvider>
                    <Navbar/>
                    <SidebarMenu/>
            </ThemeSwitcherContextProvider>
                <div className="px-[10vw] transition-filter duration-300 ease-out">
                    <Home/>
                    <About/>
                    <Work/>
                    <Contact/>
                </div>
        </SidebarMenuContextProvider>
        <Footer/>
    </div>;
}

export default IndexPage;

export const Head = () => <title>Hugo Rathle</title>;
