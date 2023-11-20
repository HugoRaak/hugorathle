import { useCallback, useEffect } from 'react';

const useMenuFocus = (menuRef, buttonRef, isOpenMenu, setIsOpenMenu) => {
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
};

export default useMenuFocus;
