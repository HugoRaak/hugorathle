import * as React from "react";
import {useSidebarMenu} from "@hooks";
import {useEffect} from "react";

export const ButtonToggleMenu = () => {
    const {isOpenMenu, toggleIsOpenMenu} = useSidebarMenu();
    useEffect(() => {
        if(isOpenMenu) {
            document.body.classList.add('overflow-hidden');
            document.querySelector('.overlay')?.addEventListener('click', toggleIsOpenMenu);
            document.querySelectorAll('.link').forEach((link) => {
                link.addEventListener('click', toggleIsOpenMenu)
            });
        } else {
            document.body.classList.remove('overflow-hidden');
            document.querySelector('.overlay')?.removeEventListener('click', toggleIsOpenMenu);
            document.querySelectorAll('.link').forEach((link) => {
                link.removeEventListener('click', toggleIsOpenMenu)
            });
        }
    }, [isOpenMenu, toggleIsOpenMenu]);

    return <div className={`menu__ham block relative -top-12 -right-9 sm:hidden ${isOpenMenu ? 'open' : ''}`}>
        <svg viewBox="10 0 100 100" xmlns="http://www.w3.org/2000/svg"
             className="block absolute z-30 w-24 h-24 top-0 right-0">
            <circle cx="50" cy="50" r="20" onClick={toggleIsOpenMenu}
                    className="fill-white opacity-0 cursor-pointer"/>
            <g onClick={toggleIsOpenMenu} className="cursor-pointer">
                <path d="M0 40h62c13 0 6 28-4 18L35 35"
                      className="ham__l1 stroke-black dark:stroke-white"/>
                <path d="M0 50h70"
                      className="ham__l2 stroke-black dark:stroke-white"/>
                <path d="M0 60h62c13 0 6-28-4-18L35 65"
                      className="ham__l3 stroke-black dark:stroke-white"/>
            </g>
        </svg>
    </div>;
};