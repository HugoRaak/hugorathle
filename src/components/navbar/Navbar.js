import React, { useCallback, useEffect, useState } from 'react';
import { Separator } from '@components';
import { NavLink } from './NavLink';
import Logo from './Logo';
import { ButtonToggleMenu } from './sideBarMenu/ButtonToggleMenu';
import { SidebarMenu } from './sideBarMenu/SidebarMenu';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const links = [
    { location: 'about', name: 'About' },
    { location: 'work', name: 'Work' },
    { location: 'contact', name: 'Contact' },
];

const Navbar = ({ isIndexPage }) => {
    const [isMounted, setIsMounted] = useState(!isIndexPage);
    const [isSm, setIsSm] = useState(false);
    const [isAppearing, setIsAppearing] = useState(isIndexPage);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isShow, setIsShow] = useState(true);
    const [isInitialPos, setIsInitialPos] = useState(true);

    const onNavLinkClick = useCallback(
        isIndexPage
            ? (e) => {
                  if (!isInitialPos) {
                      const targetElement = document.querySelector(window.location.hash);

                      if (targetElement && targetElement.offsetTop < window.scrollY) {
                          const navbarHeight = document.querySelector('header').offsetHeight;
                          const targetPosition = targetElement.offsetTop - navbarHeight;

                          e.preventDefault();
                          window.scrollTo({
                              top: targetPosition,
                              behavior: 'smooth',
                          });
                      }
                  }
              }
            : () => {},
        [isInitialPos],
    );

    const toggleIsOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    useEffect(() => {
        let prevScrollY = window.scrollY;
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            currentScrollY < prevScrollY || currentScrollY < 50
                ? setIsShow(true)
                : setIsShow(false);
            currentScrollY < 100 ? setIsInitialPos(true) : setIsInitialPos(false);
            prevScrollY = currentScrollY > 0 ? currentScrollY : 0;
        };

        const timeoutMounted = isIndexPage ? setTimeout(() => setIsMounted(true), 100) : null;
        const timeoutAppearing = isIndexPage ? setTimeout(() => setIsAppearing(false), 1000) : null;
        if (window.innerWidth < 640 && isIndexPage) setIsSm(true);

        window.addEventListener('scroll', onScroll);
        return () => {
            if (isIndexPage) {
                clearTimeout(timeoutMounted);
                clearTimeout(timeoutAppearing);
            }
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const timeout = isIndexPage ? 2000 : 0;
    const fadeDownClass = isIndexPage ? 'fadedown' : '';
    const slideRightFullClass = isIndexPage ? 'slideright-full' : '';

    return (
        <header
            className={
                'fixed top-0 z-40 bg-white dark:bg-darkTheme transition-all duration-300 ease-out shadow- shadow-black' +
                (!isInitialPos && isShow ? ' shadow-[0_10px_30px_-10px_rgba(16,16,16,0.7)] ' : '') +
                (isShow || isOpenMenu ? ' translate-y-0' : ' translate-y-[-105%]')
            }
        >
            <div className="flex justify-between items-center w-full xs:px-5">
                <Link to="/" className="transition-filter duration-300 ease-out">
                    <Logo />
                </Link>
                <div className="flex-grow hidden sm:flex justify-center space-x-5 md:space-x-20 mt-1">
                    <TransitionGroup component={null}>
                        {isMounted &&
                            links.map((link, i) => (
                                <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                                    <NavLink
                                        key={i}
                                        location={`/#${link.location}`}
                                        style={
                                            isAppearing ? { transitionDelay: `${i * 100}ms` } : {}
                                        }
                                        onClick={onNavLinkClick}
                                    >
                                        {link.name}
                                    </NavLink>
                                </CSSTransition>
                            ))}
                    </TransitionGroup>
                </div>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames={fadeDownClass} timeout={timeout} in={!isSm}>
                            <>
                                {!isOpenMenu && (
                                    <div
                                        className="hidden sm:block pr-5 right-0"
                                        style={
                                            isAppearing
                                                ? { transitionDelay: `${links.length * 100}ms` }
                                                : {}
                                        }
                                    >
                                        <ThemeSwitcher isIndexPage={isIndexPage} />
                                    </div>
                                )}
                            </>
                        </CSSTransition>
                    )}
                </TransitionGroup>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames={fadeDownClass} timeout={timeout} in={isSm}>
                            <ButtonToggleMenu
                                isOpenMenu={isOpenMenu}
                                toggleIsOpenMenu={toggleIsOpenMenu}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
                {isMounted && (
                    <SidebarMenu
                        links={links}
                        onNavLinkClick={onNavLinkClick}
                        isOpenMenu={isOpenMenu}
                        isIndexPage={isIndexPage}
                    />
                )}
            </div>
            <TransitionGroup component={null}>
                {isMounted && (
                    <CSSTransition classNames={slideRightFullClass} timeout={timeout}>
                        <Separator
                            className="transition-filter duration-300 ease-out"
                            style={{
                                transitionDelay: `${!isSm ? links.length * 100 + 100 : 100}ms`,
                            }}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </header>
    );
};

Navbar.propTypes = {
    isIndexPage: PropTypes.bool.isRequired,
};

export default Navbar;
