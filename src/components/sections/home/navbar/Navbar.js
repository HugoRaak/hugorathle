import * as React from "react";
import {Logo} from "@components";
import {NavLink} from "./NavLink";
import {ThemeSwitcher} from "./ThemeSwitcher";

export const Navbar = () => {
    return <div className="flex justify-between items-center w-full px-5">
        <div className="flex-none">
            <a href="/" className="decoration-0">
                <Logo/>
            </a>
        </div>
        <div className="flex-grow flex justify-between sm:px-[10%] md:px-[15%] lg:px-[20%] xl:px-[25%]">
            <NavLink location={'#about'}>About</NavLink>
            <NavLink location={'#work'}>Work</NavLink>
            <NavLink location={'#contact'}>Contact</NavLink>
        </div>
        <div className="flex-none">
            <ThemeSwitcher/>
        </div>
    </div>
}