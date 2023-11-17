import React, { forwardRef } from 'react';
import { NavLink } from '../NavLink';
import { ThemeSwitcher } from '../ThemeSwitcher';
import PropTypes from 'prop-types';

export const SidebarMenu = forwardRef(({ links, onNavLinkClick, isOpenMenu, isIndexPage }, ref) => {
    return (
        <>
            <aside
                className={`fixed top-0 right-0 flex flex-col justify-center items-center z-50 bg-gray-100 dark:bg-gray-800 h-screen w-[min(75vw,400px)] ${
                    isOpenMenu ? 'translate-x-0' : 'translate-x-[100vw]'
                } transition-transform duration-300 ease-out`}
                ref={ref}
            >
                {isOpenMenu && (
                    <div className="absolute z-[60] top-[1.60rem] left-2 xs:left-7">
                        <ThemeSwitcher isIndexPage={isIndexPage} />
                    </div>
                )}
                <nav>
                    <ol className="flex flex-col space-y-10 text-center">
                        {links.map((link, i) => (
                            <li key={i}>
                                <NavLink
                                    location={`/#${link.location}`}
                                    onClick={onNavLinkClick}
                                    tabIndex={isOpenMenu ? 0 : -1}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ol>
                </nav>
            </aside>
            <div
                className={
                    'overlay h-screen w-screen fixed top-0 left-0 z-[35] cursor-pointer transition-filter duration-300 ease-out' +
                    (isOpenMenu
                        ? ' backdrop-blur-[5px]'
                        : ' backdrop-blur-none opacity-0 pointer-events-none')
                }
            />
        </>
    );
});

SidebarMenu.displayName = 'SidebarMenu';

SidebarMenu.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({ location: PropTypes.string, name: PropTypes.string }),
    ).isRequired,
    onNavLinkClick: PropTypes.func.isRequired,
    isOpenMenu: PropTypes.bool.isRequired,
    isIndexPage: PropTypes.bool.isRequired,
};
