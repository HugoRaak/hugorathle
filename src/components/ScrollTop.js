import React, {useEffect, useState} from 'react';

const ScrollTop = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            currentScrollY > 150 ? setIsShow(true) : setIsShow(false);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return <button className={"scroll-top flex justify-center items-center " +
                    "fixed bottom-2 right-0 2xs:bottom-3 2xs:right-1 mobile:bottom-5 mobile:right-3 " +
                    "w-6 h-6 2xs:w-8 2xs:h-8 mobile:w-12 mobile:h-12 z-[35] " +
                    "rounded-full bg-white dark:bg-darkTheme shadow-inner shadow-black/40 dark:shadow-black/70 " +
                    "border border-gray-200 dark:border-[#323232] cursor-pointer" +
                    (isShow ? ' opacity-1 translate-y-0 ' : ' opacity-0 -translate-y-10 ') + "transition-all duration-300 ease-out"}
                onClick={onScrollTop}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none"
             className="w-[9px] h-3 2xs:w-[13px] 2xs:h-4 mobile:w-[17px] mobile:h-5">
            <path d="M14.8649 9.45946C14.4595 9.45946 14.1893 9.32432 13.919 9.05405L7.16224 2.2973C6.6217 1.75676 6.6217 0.945946 7.16224 0.405405C7.70278 -0.135135 8.51359 -0.135135 9.05413 0.405405L15.8109 7.16216C16.3514 7.7027 16.3514 8.51351 15.8109 9.05405C15.5406 9.32432 15.2704 9.45946 14.8649 9.45946Z" fill="#D67300"/>
            <path d="M1.35135 9.45946C0.945946 9.45946 0.675676 9.32432 0.405405 9.05405C-0.135135 8.51351 -0.135135 7.7027 0.405405 7.16216L7.16216 0.405405C7.7027 -0.135135 8.51351 -0.135135 9.05405 0.405405C9.5946 0.945946 9.5946 1.75676 9.05405 2.2973L2.2973 9.05405C2.02703 9.32432 1.75676 9.45946 1.35135 9.45946Z" fill="#D67300"/>
            <path d="M8.10819 20C7.29738 20 6.75684 19.5556 6.75684 18.8889V1.11111C6.75684 0.444444 7.29738 0 8.10819 0C8.919 0 9.45954 0.444444 9.45954 1.11111V18.8889C9.45954 19.5556 8.919 20 8.10819 20Z" fill="#D67300"/>
        </svg>
    </button>;
};

export default ScrollTop;