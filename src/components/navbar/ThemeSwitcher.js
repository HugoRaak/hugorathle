/*eslint jsx-a11y/label-has-associated-control: "off"*/
import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeSwitcher = ({ isIndexPage }) => {
    const [isMounted, setIsMounted] = useState(isIndexPage);
    const [isDark, setIsDark] = useState(
        isIndexPage ? document.documentElement.hasAttribute('data-theme') : true,
    );

    useEffect(() => {
        if (!isMounted) {
            //component need to be mounted before access to the localStorage
            setIsMounted(true);
            if (localStorage.getItem('theme') === 'light') setIsDark(false);
        } else {
            if (isDark) {
                document.documentElement.dataset.theme = 'dark';
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            }
        }
    }, [isDark]);

    return (
        <>
            {isMounted && (
                <>
                    <button
                        id="theme-switcher"
                        className={`relative block w-12 h-6 bg-slate-100 dark:bg-neutral-800 rounded-full shadow-inner shadow-black/40 dark:shadow-black/70 border border-gray-200 dark:border-[#323232] cursor-pointer transition-all duration-300 ease-out ${
                            isDark ? 'darkChoice' : ''
                        }`}
                        onClick={() => setIsDark(!isDark)}
                        aria-label="Switch theme"
                        aria-pressed={isDark}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 33 33"
                            fill="none"
                            className="sun opacity-1 absolute top-0.5 left-0 transition-all duration-300 ease-out translate-x-0 rotate-0"
                        >
                            <path
                                d="M16.5 0c-.875 0-1.563.688-1.563 1.563s.688 1.562 1.563 1.562 1.563-.688 1.563-1.563S17.375 0 16.5 0ZM8.687 3.125c-.874 0-1.562.688-1.562 1.563S7.813 6.25 8.688 6.25c.874 0 1.562-.688 1.562-1.563s-.688-1.562-1.563-1.562Zm15.626 0c-.875 0-1.563.688-1.563 1.563s.688 1.562 1.563 1.562 1.562-.688 1.562-1.563-.688-1.562-1.563-1.562ZM16.5 6.25c-3.438 0-6.25 2.813-6.25 6.25 0 3.438 2.813 6.25 6.25 6.25 3.438 0 6.25-2.813 6.25-6.25 0-3.438-2.813-6.25-6.25-6.25ZM5.562 10.938C4.688 10.938 4 11.624 4 12.5s.688 1.563 1.563 1.563 1.562-.688 1.562-1.563-.688-1.563-1.563-1.563Zm21.875 0c-.875 0-1.562.687-1.562 1.562s.688 1.563 1.563 1.563S29 13.374 29 12.5s-.688-1.563-1.563-1.563ZM8.688 18.75c-.874 0-1.562.688-1.562 1.563s.688 1.562 1.563 1.562c.874 0 1.562-.688 1.562-1.563s-.688-1.562-1.563-1.562Zm15.626 0c-.875 0-1.563.688-1.563 1.563s.688 1.562 1.563 1.562 1.562-.688 1.562-1.563-.688-1.562-1.563-1.562ZM16.5 21.875c-.875 0-1.563.688-1.563 1.563S15.626 25 16.5 25s1.563-.688 1.563-1.563-.688-1.562-1.563-1.562Z"
                                fill="#D67300"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 25 25"
                            fill="none"
                            className="moon opacity-0 absolute top-0.5 right-1 transition-all duration-300 ease-out -translate-x-7 rotate-0"
                        >
                            <path
                                d="M8.74 0C3.663 1.703 0 6.491 0 12.146 0 19.248 5.752 25 12.854 25c5.655 0 10.443-3.663 12.146-8.74-1.285.417-2.667.707-4.113.707-7.102 0-12.854-5.752-12.854-12.854 0-1.446.257-2.828.707-4.113Z"
                                fill="#fff"
                            />
                        </svg>
                    </button>
                </>
            )}
        </>
    );
};

ThemeSwitcher.propTypes = {
    isIndexPage: PropTypes.bool.isRequired,
};

export default ThemeSwitcher;
