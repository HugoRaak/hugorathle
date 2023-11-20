import React, { useCallback, useEffect, useState } from 'react';
import { Separator } from '@components';
import { NavLink } from './NavLink';
import Logo from './Logo';
import { Menu } from './menu/Menu';
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
        (e) => {
            e.currentTarget.blur();

            if (isIndexPage && typeof document !== 'undefined' && !isInitialPos) {
                const targetElement = document.querySelector(
                    `#${e.currentTarget.href.split('#')[1]}`,
                );

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
        },
        [isInitialPos, isMounted],
    );

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
                'fixed top-0 z-40 bg-light dark:bg-dark transition-all duration-300 ease-out shadow-black' +
                (!isInitialPos && isShow ? ' shadow-[0_10px_30px_-10px_rgba(16,16,16,0.7)] ' : '') +
                (isShow || isOpenMenu ? ' translate-y-0' : ' translate-y-[-105%]') +
                ' focus-within:translate-y-0'
            }
        >
            <nav className="flex justify-between items-center w-full xs:px-5">
                <Link
                    to="/"
                    className="transition-filter duration-300 ease-out focus:outline-offset-0"
                    aria-label="Home"
                >
                    <Logo />
                </Link>
                <ol className="flex-grow hidden sm:flex justify-center space-x-5 md:space-x-20 mt-1">
                    <TransitionGroup component={null}>
                        {isMounted &&
                            links.map((link, i) => (
                                <CSSTransition
                                    key={i}
                                    classNames={fadeDownClass}
                                    timeout={timeout}
                                    in={!isSm}
                                >
                                    <li
                                        key={i}
                                        style={
                                            isAppearing ? { transitionDelay: `${i * 100}ms` } : {}
                                        }
                                    >
                                        <NavLink
                                            location={`/#${link.location}`}
                                            onClick={onNavLinkClick}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                </CSSTransition>
                            ))}
                    </TransitionGroup>
                </ol>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames={fadeDownClass} timeout={timeout} in={!isSm}>
                            <>
                                {!isOpenMenu && (
                                    <div
                                        className="hidden sm:block pr-5 right-0"
                                        style={{ transitionDelay: `${links.length * 100}ms` }}
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
                            <Menu
                                isOpenMenu={isOpenMenu}
                                setIsOpenMenu={setIsOpenMenu}
                                links={links}
                                onNavLinkClick={onNavLinkClick}
                                isIndexPage={isIndexPage}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </nav>
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
