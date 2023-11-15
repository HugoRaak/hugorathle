import React, {useEffect, useState} from "react";
import {Separator} from "@components";
import {useThemeSwitcher} from "@hooks";
import {NavLink} from "./NavLink";
import Logo from "./Logo";
import {ButtonToggleMenu} from "./sideBarMenu/ButtonToggleMenu";
import {SidebarMenu} from "./sideBarMenu/SidebarMenu";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const links = [
    {location: 'about', name: 'About'},
    {location: 'work', name: 'Work'},
    {location: 'contact', name: 'Contact'}
];

const Navbar = () => {
    const {themeSwitcherRef} = useThemeSwitcher();
    const [isMounted, setIsMounted] = useState(false);
    const [isSm, setIsSm] = useState(false);
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

        if(window.innerWidth < 640) {
            setIsSm(true);
        }

        const timeout = setTimeout(() => setIsMounted(true), 100);

        window.addEventListener('scroll', onScroll);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', onScroll)
        };
    }, []);

    return <header className={"fixed top-0 z-40 bg-white dark:bg-darkTheme transition-all duration-300 ease-out shadow- shadow-black"
                   + (!isInitialPos && isShow ? ' shadow-[0_10px_30px_-10px_rgba(16,16,16,0.7)] ' : '')
                   + (isShow || isOpenMenu ? ' translate-y-0' : ' translate-y-[-105%]')}>
        <div className="flex justify-between items-center w-full xs:px-5">
            <a href="/" className="transition-filter duration-300 ease-out">
                <Logo/>
            </a>
            <div className="flex-grow hidden sm:flex justify-center space-x-5 md:space-x-20">
                <TransitionGroup component={null}>
                    {isMounted && links.map((link, i) => <CSSTransition key={i} classNames="fadedown" timeout={2000}>
                            <NavLink key={i} location={`#${link.location}`} style={{transitionDelay: `${i * 100}ms`}}>
                                {link.name}
                            </NavLink>
                    </CSSTransition>)}
                </TransitionGroup>
            </div>
            <TransitionGroup component={null}>
                {isMounted && <CSSTransition classNames="fadedown" timeout={2000} in={!isSm}>
                    <>
                        {!isOpenMenu && <div className="hidden sm:block pr-5 right-0"
                                             style={{transitionDelay: `${links.length * 100}ms`}}>
                            {themeSwitcherRef.current}
                        </div>}
                    </>
                </CSSTransition>}
            </TransitionGroup>
            <TransitionGroup component={null}>
                {isMounted && <CSSTransition classNames="fadedown" timeout={2000} in={isSm}>
                    <ButtonToggleMenu isOpenMenu={isOpenMenu} toggleIsOpenMenu={toggleIsOpenMenu}/>
                </CSSTransition>}
            </TransitionGroup>
            {isMounted && <SidebarMenu isOpenMenu={isOpenMenu}/>}
        </div>
        <TransitionGroup component={null}>
            {isMounted && <CSSTransition classNames="slideright-full" timeout={2000}>
                <Separator className="transition-filter duration-300 ease-out"
                           style={{transitionDelay: `${!isSm ? links.length * 100 + 100 : 100}ms`}}/>
            </CSSTransition>}
        </TransitionGroup>
    </header>;
};

export default Navbar;