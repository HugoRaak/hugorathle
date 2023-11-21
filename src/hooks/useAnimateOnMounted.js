import { useEffect, useState } from 'react';

const useAnimateOnMounted = (
    defaultIsMounted = false,
    defaultIsAnimating = true,
    durationAnimation = 500,
) => {
    const [isMounted, setIsMounted] = useState(defaultIsMounted);
    const [isAnimating, setIsAnimating] = useState(defaultIsAnimating);

    useEffect(() => {
        const timeoutMounted = setTimeout(() => setIsMounted(true), 100);
        const timeoutAppearing = setTimeout(() => setIsAnimating(false), durationAnimation);

        return () => {
            clearTimeout(timeoutMounted);
            clearTimeout(timeoutAppearing);
        };
    }, []);

    return {
        isMounted,
        isAnimating,
    };
};

export default useAnimateOnMounted;
