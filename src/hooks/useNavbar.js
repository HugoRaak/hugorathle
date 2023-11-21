import { useEffect, useState } from 'react';

const useNavbar = (isIndexPage) => {
    const [isSm, setIsSm] = useState(false);
    const [isShow, setIsShow] = useState(true);
    const [isInitialPos, setIsInitialPos] = useState(true);

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

        if (window.innerWidth < 640 && isIndexPage) setIsSm(true);

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return {
        isSm,
        isShow,
        isInitialPos,
    };
};

export default useNavbar;
