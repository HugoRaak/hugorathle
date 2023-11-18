import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from './Sidebar';

export const Menu = ({ isOpenMenu, setIsOpenMenu, links, onNavLinkClick, isIndexPage }) => {
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    const toggleIsOpenMenu = () => setIsOpenMenu(!isOpenMenu);

    let menuFocusables;
    let firstFocusable;
    let lastFocusable;

    const setFocusables = () => {
        menuFocusables = [
            buttonRef.current,
            menuRef.current.querySelector('#theme-switcher'),
            ...Array.from(menuRef.current.querySelectorAll('a')),
        ];
        firstFocusable = menuFocusables[0];
        lastFocusable = menuFocusables[menuFocusables.length - 1];
    };
    const handleBackwardTab = (e) => {
        if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
        }
    };
    const handleForwardTab = (e) => {
        if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
        }
    };

    const onKeyDown = useCallback(
        (e) => {
            if (!isOpenMenu) {
                return;
            }
            switch (e.key) {
                case 'Escape':
                    setIsOpenMenu(false);
                    break;
                case 'Tab':
                    if (menuFocusables && menuFocusables.length === 1) {
                        e.preventDefault();
                        break;
                    }
                    e.shiftKey ? handleBackwardTab(e) : handleForwardTab(e);
                    break;
                default:
                    break;
            }
        },
        [isOpenMenu],
    );

    useEffect(() => {
        const onResize = (e) => {
            if (e.currentTarget.innerWidth >= 640) {
                setIsOpenMenu(false);
            }
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        setFocusables();
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    useEffect(() => {
        const removeAllEvents = () => {
            document.querySelector('.overlay')?.removeEventListener('click', toggleIsOpenMenu);
            document.querySelectorAll('.link').forEach((link) => {
                link.removeEventListener('click', toggleIsOpenMenu);
            });
        };

        if (isOpenMenu) {
            document.documentElement.classList.add('overflow-hidden');
            document.querySelector('.overlay')?.addEventListener('click', toggleIsOpenMenu);
            document.querySelectorAll('.link').forEach((link) => {
                link.addEventListener('click', toggleIsOpenMenu);
            });
        } else {
            document.documentElement.removeAttribute('class');
            removeAllEvents();
        }

        return () => {
            if (isOpenMenu) removeAllEvents();
        };
    }, [isOpenMenu, toggleIsOpenMenu]);

    return (
        <>
            <div
                className={`menu__ham relative -top-12 -right-7 2xs:-right-5 xs:-right-9 sm:hidden ${
                    isOpenMenu ? 'open' : ''
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="10 0 100 100"
                    className="block absolute z-[70] w-24 h-24 top-0 right-0"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="20"
                        className="fill-white opacity-0 cursor-pointer"
                    />
                    <g>
                        <path
                            d="M0 40h62c13 0 6 28-4 18L35 35"
                            className="ham__l1 stroke-black dark:stroke-white"
                        />
                        <path d="M0 50h70" className="ham__l2 stroke-black dark:stroke-white" />
                        <path
                            d="M0 60h62c13 0 6-28-4-18L35 65"
                            className="ham__l3 stroke-black dark:stroke-white"
                        />
                    </g>
                </svg>
                <button
                    onClick={toggleIsOpenMenu}
                    className="absolute sm:hidden z-[70] w-9 h-9 top-8 right-10"
                    aria-label="Toggle Menu"
                    aria-expanded={isOpenMenu}
                    ref={buttonRef}
                />
            </div>
            <Sidebar
                links={links}
                onNavLinkClick={onNavLinkClick}
                isOpenMenu={isOpenMenu}
                isIndexPage={isIndexPage}
                ref={menuRef}
            />
        </>
    );
};

Menu.propTypes = {
    isOpenMenu: PropTypes.bool.isRequired,
    setIsOpenMenu: PropTypes.func.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({ location: PropTypes.string, name: PropTypes.string }),
    ).isRequired,
    onNavLinkClick: PropTypes.func.isRequired,
    isIndexPage: PropTypes.bool.isRequired,
};
