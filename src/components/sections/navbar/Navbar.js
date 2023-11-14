import React, {useEffect, useState} from "react";
import {Separator, NavLink} from "@components";
import {useThemeSwitcher} from "@hooks";
import Logo from "./Logo";
import {ButtonToggleMenu} from "./sideBarMenu/ButtonToggleMenu";
import {SidebarMenu} from "./sideBarMenu/SidebarMenu";

const Navbar = () => {
    const {themeSwitcherRef} = useThemeSwitcher();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isShow, setIsShow] = useState(true);
    const [isInitialPos, setIsInitialPos] = useState(true);

    const toggleIsOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    useEffect(() => {
        let prevScrollY = window.scrollY;

        const onScroll = () => {
            const currentScrollY = window.scrollY;
            (currentScrollY < prevScrollY || currentScrollY < 50) ? setIsShow(true) : setIsShow(false);
            currentScrollY < 100 ? setIsInitialPos(true) : setIsInitialPos(false);
            prevScrollY = currentScrollY > 0 ? currentScrollY : 0;
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <header className={"fixed top-0 z-40 bg-white dark:bg-darkTheme transition-all duration-300 ease-out shadow- shadow-black"
                   + (!isInitialPos && isShow ? ' shadow-[0_10px_30px_-10px_rgba(16,16,16,0.7)] ' : '')
                   + (isShow || isOpenMenu ? ' translate-y-0' : ' translate-y-[-105%]')}>
        <div className="flex justify-between items-center w-full xs:px-5">
            <a href="/" className={'transition-filter duration-300 ease-out' + (isOpenMenu ? ' blur-[5px]' : '')}>
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
            <ButtonToggleMenu isOpenMenu={isOpenMenu} toggleIsOpenMenu={toggleIsOpenMenu}/>
            <SidebarMenu isOpenMenu={isOpenMenu}/>
        </div>
        <Separator className={'transition-filter duration-300 ease-out' + (isOpenMenu ? ' blur-[5px]' : '')}/>
    </header>;
};

export default Navbar;