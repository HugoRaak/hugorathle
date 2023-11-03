import React from "react";
import {NavLink} from "@components";
import {useSidebarMenu, useThemeSwitcher} from "@hooks";

const SidebarMenu = () => {
    const {isOpenMenu} = useSidebarMenu();
    const {themeSwitcherRef} = useThemeSwitcher();

    return <>
        <aside
            className={`fixed top-0 right-0 flex flex-col justify-center items-center z-20 bg-gray-100 dark:bg-gray-800 h-screen w-[min(75vw,400px)] ${isOpenMenu ? 'translate-x-0' : 'translate-x-[100vw]'} transition-transform duration-300 ease-out`}>
            {isOpenMenu && <div className="absolute z-30 top-[1.60rem] left-2 xsm:left-7">
                {themeSwitcherRef.current}
            </div>}
            <nav className="flex flex-col space-y-10 text-center">
                <NavLink location={'#about'}>About</NavLink>
                <NavLink location={'#work'}>Work</NavLink>
                <NavLink location={'#contact'}>Contact</NavLink>
            </nav>
        </aside>
        <div className={"overlay h-screen absolute top-0 left-0 z-10 cursor-pointer" + (isOpenMenu ? '' : ' hidden')} style={{width: 'calc(100vw - min(75vw, 400px))'}}/>
    </>;
};

export default SidebarMenu;