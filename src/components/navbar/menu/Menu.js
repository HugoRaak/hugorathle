import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from './Sidebar';
import { useMenuFocus } from '@hooks';

export const Menu = ({ isOpenMenu, setIsOpenMenu, links, onNavLinkClick, isIndexPage }) => {
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    useMenuFocus(menuRef, buttonRef, isOpenMenu, setIsOpenMenu);

    const toggleIsOpenMenu = () => setIsOpenMenu(!isOpenMenu);

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
