import React from "react";
import {NavLink} from "@components";
import {useThemeSwitcher} from "@hooks";

/**
 *
 * @param {boolean} isOpenMenu
 */
export const SidebarMenu = ({isOpenMenu}) => {
    const {themeSwitcherRef} = useThemeSwitcher();

    return <>
        <aside
            className={`fixed top-0 right-0 flex flex-col justify-center items-center z-50 bg-gray-100 dark:bg-gray-800 h-screen w-[min(75vw,400px)] ${isOpenMenu ? 'translate-x-0' : 'translate-x-[100vw]'} transition-transform duration-300 ease-out`}>
            {isOpenMenu && <div className="absolute z-[60] top-[1.60rem] left-2 xs:left-7">
                {themeSwitcherRef.current}
            </div>}
            <nav className="flex flex-col space-y-10 text-center">
                <NavLink location={'#about'}>About</NavLink>
                <NavLink location={'#work'}>Work</NavLink>
                <NavLink location={'#contact'}>Contact</NavLink>
            </nav>
        </aside>
        <div className={"overlay h-screen w-screen fixed top-0 left-0 z-[35] cursor-pointer transition-filter duration-300 ease-out" + (isOpenMenu ? ' backdrop-blur-[5px]' : ' backdrop-blur-none opacity-0 pointer-events-none')}/>
    </>;
};