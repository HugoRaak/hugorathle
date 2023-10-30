import * as React from "react";
import {useEffect, useState} from "react";

export const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        if(isDark) {
            document.documentElement.setAttribute('data-theme','dark');
        } else if(isDark === false) {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isDark]);

    return <div className="pr-5 right-0">
        <input type="checkbox" id="theme-switcher" className="hidden" aria-label="Change theme"
               onChange={e => setIsDark(e.target.checked)} checked={isDark}/>
        <label htmlFor="theme-switcher"
               className="relative block w-12 h-6 bg-white dark:bg-darkTheme rounded-full
               shadow-inner shadow-black/40 dark:shadow-black/70 border border-gray-200 dark:border-[#323232]
               cursor-pointer transition-all duration-300 ease-out">
            <svg width="24" height="24" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="sun opacity-1 absolute top-0.5 left-0">
                <path d="M16.5 0C15.625 0 14.9375 0.6875 14.9375 1.5625C14.9375 2.4375 15.625 3.125 16.5 3.125C17.375 3.125 18.0625 2.4375 18.0625 1.5625C18.0625 0.6875 17.375 0 16.5 0ZM8.6875 3.125C7.8125 3.125 7.125 3.8125 7.125 4.6875C7.125 5.5625 7.8125 6.25 8.6875 6.25C9.5625 6.25 10.25 5.5625 10.25 4.6875C10.25 3.8125 9.5625 3.125 8.6875 3.125ZM24.3125 3.125C23.4375 3.125 22.75 3.8125 22.75 4.6875C22.75 5.5625 23.4375 6.25 24.3125 6.25C25.1875 6.25 25.875 5.5625 25.875 4.6875C25.875 3.8125 25.1875 3.125 24.3125 3.125ZM16.5 6.25C13.0625 6.25 10.25 9.0625 10.25 12.5C10.25 15.9375 13.0625 18.75 16.5 18.75C19.9375 18.75 22.75 15.9375 22.75 12.5C22.75 9.0625 19.9375 6.25 16.5 6.25ZM5.5625 10.9375C4.6875 10.9375 4 11.625 4 12.5C4 13.375 4.6875 14.0625 5.5625 14.0625C6.4375 14.0625 7.125 13.375 7.125 12.5C7.125 11.625 6.4375 10.9375 5.5625 10.9375ZM27.4375 10.9375C26.5625 10.9375 25.875 11.625 25.875 12.5C25.875 13.375 26.5625 14.0625 27.4375 14.0625C28.3125 14.0625 29 13.375 29 12.5C29 11.625 28.3125 10.9375 27.4375 10.9375ZM8.6875 18.75C7.8125 18.75 7.125 19.4375 7.125 20.3125C7.125 21.1875 7.8125 21.875 8.6875 21.875C9.5625 21.875 10.25 21.1875 10.25 20.3125C10.25 19.4375 9.5625 18.75 8.6875 18.75ZM24.3125 18.75C23.4375 18.75 22.75 19.4375 22.75 20.3125C22.75 21.1875 23.4375 21.875 24.3125 21.875C25.1875 21.875 25.875 21.1875 25.875 20.3125C25.875 19.4375 25.1875 18.75 24.3125 18.75ZM16.5 21.875C15.625 21.875 14.9375 22.5625 14.9375 23.4375C14.9375 24.3125 15.625 25 16.5 25C17.375 25 18.0625 24.3125 18.0625 23.4375C18.0625 22.5625 17.375 21.875 16.5 21.875Z" fill="#D67300"/>
            </svg>
            <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="moon opacity-0 absolute top-0.5 right-1">
                <path d="M8.74036 0C3.66324 1.70308 0 6.491 0 12.1465C0 19.2481 5.75193 25 12.8535 25C18.509 25 23.2969 21.3368 25 16.2596C23.7147 16.6774 22.3329 16.9666 20.8869 16.9666C13.7853 16.9666 8.03342 11.2147 8.03342 4.11311C8.03342 2.66709 8.29049 1.28535 8.74036 0Z" fill="white"/>
            </svg>
        </label>
    </div>
}