import * as React from "react";
import {Separator, Logo, NavLink} from "@components";
import {useSidebarMenu, useThemeSwitcher} from "@hooks";
import {ButtonToggleMenu} from "./ButtonToggleMenu";

const Navbar = () => {
    const {isOpenMenu} = useSidebarMenu();
    const {themeSwitcherRef} = useThemeSwitcher();

    return <>
        <header className="flex justify-between items-center w-full xsm:px-5">
            <a href="/" className={'transition-filter duration-300 ease-out' + (isOpenMenu ? ' blur' : '')}>
                <Logo/>
            </a>
            <div className="flex-grow hidden sm:flex justify-center space-x-5 md:space-x-20">
                <NavLink location={'#about'}>About</NavLink>
                <NavLink location={'#work'}>Work</NavLink>
                <NavLink location={'#contact'}>Contact</NavLink>
            </div>
            {!isOpenMenu && <div className="hidden sm:block pr-5 right-0">
                {themeSwitcherRef.current}
            </div>}
            <ButtonToggleMenu/>
        </header>
        <Separator className={'transition-filter duration-300 ease-out' + (isOpenMenu ? ' blur' : '')}/>
    </>;
};

export default Navbar;