import React, { useCallback, useEffect, useState } from 'react';
import anime from 'animejs';
import { IconLogo, IconRaak } from '@components/icons';
import PropTypes from 'prop-types';

const Loader = ({ finishLoading }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isXs, setIsXs] = useState(false);
    const [is2Xs, setIs2Xs] = useState(false);

    const animate = useCallback(() => {
        const loader = anime.timeline({
            complete: finishLoading,
        });

        loader.add({
            targets: '.logo__shape path',
            duration: 1000,
            translateX: function (path, i) {
                return i % 2 !== 0 ? [i === 1 ? 100 : -100, 0] : [0, 0];
            },
            translateY: function (path, i) {
                return i % 2 === 0 ? [i === 0 ? -100 : 100, 0] : [0, 0];
            },
            easing: 'easeInOutQuart',
            delay: function (path, i) {
                return i * 150;
            },
        });

        if (!is2Xs)
            loader
                .add(
                    {
                        targets: '#a',
                        strokeDashoffset: [anime.setDashoffset, 0],
                        duration: 800,
                        easing: 'easeInOutSine',
                    },
                    '-=400',
                )
                .add(
                    {
                        targets: '#R',
                        duration: 1000,
                        translateX: [-100, 0],
                        easing: 'easeInOutQuart',
                    },
                    '-=500',
                )
                .add(
                    {
                        targets: '#k',
                        duration: 1000,
                        translateX: [100, 0],
                        easing: 'easeInOutQuart',
                    },
                    '-=1000',
                )
                .add({
                    targets: '#Raak',
                    duration: 800,
                    fill: ['none', '#FFF'],
                    easing: 'easeInOutQuart',
                });

        loader.add({
            targets: '#loader',
            duration: 500,
            top: 0,
            left: 0,
            translateX: 0,
            translateY: 0,
            scale: 1,
            easing: 'easeInOutQuart',
        });
    }, [finishLoading, is2Xs]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
            animate();
        }, 10);

        if (window.innerWidth < 300 && window.innerWidth >= 200) setIsXs(true);
        if (window.innerWidth < 200) setIs2Xs(true);
        return () => clearTimeout(timeout);
    }, [animate]);

    return (
        <div className="fixed inset-0 h-full w-full bg-darkTheme">
            <div
                id="loader"
                className={
                    'flex items-center justify-center space-x-2 xs:space-x-0 mobile:space-x-2 absolute top-1/2 left-1/2 xs:px-5' +
                    (isMounted ? ' opacity-1' : ' opacity-0')
                }
                style={{
                    transform: `translateX(-50%) translateY(-50%) ${
                        isXs ? 'scale(1)' : 'scale(1.75)'
                    }`,
                }}
            >
                <IconLogo className="logo__shape max-w-xl xs:max-w-2xl" />
                {!is2Xs && <IconRaak className="h-4 xs:h-7 w-auto" />}
            </div>
        </div>
    );
};

Loader.propTypes = {
    finishLoading: PropTypes.func.isRequired,
};

export default Loader;
