import React, { useEffect, useState } from 'react';

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

    const onScrollTop = (e) => {
        e.currentTarget.blur();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={
                'scroll-top flex justify-center items-center ' +
                'fixed bottom-2 right-0 2xs:bottom-3 2xs:right-1 mobile:bottom-5 mobile:right-3 ' +
                'w-6 h-6 2xs:w-8 2xs:h-8 mobile:w-12 mobile:h-12 z-[35] ' +
                'rounded-full bg-gray-200 dark:bg-neutral-800 shadow-inner shadow-black/40 dark:shadow-black/70 ' +
                'border border-gray-300 dark:border-neutral-700 cursor-pointer' +
                (isShow ? ' opacity-1 translate-y-0 ' : ' opacity-0 -translate-y-10 ') +
                'transition-all duration-300 ease-out'
            }
            onClick={onScrollTop}
            aria-label="Scroll to top"
            aria-hidden={!isShow}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                className="w-[9px] h-3 2xs:w-[13px] 2xs:h-4 mobile:w-[17px] mobile:h-5"
            >
                <title>Arrow Up</title>
                <path
                    d="M14.865 9.46c-.405 0-.676-.136-.946-.406L7.162 2.297a1.306 1.306 0 0 1 0-1.892c.54-.54 1.352-.54 1.892 0l6.757 6.757c.54.54.54 1.352 0 1.892-.27.27-.54.405-.946.405Z"
                    fill="#D67300"
                />
                <path
                    d="M1.351 9.46c-.405 0-.675-.136-.946-.406a1.306 1.306 0 0 1 0-1.892L7.162.405c.54-.54 1.352-.54 1.892 0 .54.54.54 1.352 0 1.892L2.297 9.054c-.27.27-.54.405-.946.405Z"
                    fill="#D67300"
                />
                <path
                    d="M8.108 20c-.81 0-1.351-.444-1.351-1.111V1.11c0-.666.54-1.11 1.351-1.11C8.92 0 9.46.444 9.46 1.111V18.89c0 .667-.541 1.111-1.352 1.111Z"
                    fill="#D67300"
                />
            </svg>
        </button>
    );
};

export default ScrollTop;
