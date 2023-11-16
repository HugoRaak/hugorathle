import React, { useEffect, useState } from 'react';
import { LinkButton } from '@components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const elements = [
    <h1
        key={1}
        className="text-3xl 2xs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold mt-[15vh]"
    >
        Not Found
    </h1>,
    <p key={2} className="text-lg 2xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl my-4">
        You just hit a route that doesn&rsquo;t exist...
        <br />
        the sadness.
    </p>,
    <div key={3} className="mt-6">
        <LinkButton href="/">
            <p>Go home</p>
        </LinkButton>
    </div>,
];

const NotFound = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isAppearing, setIsAppearing] = useState(true);

    useEffect(() => {
        const timeoutMounted = setTimeout(() => setIsMounted(true), 100);
        const timeoutAppearing = setTimeout(() => setIsAppearing(false), 500);

        return () => {
            clearTimeout(timeoutMounted);
            clearTimeout(timeoutAppearing);
        };
    }, []);

    return (
        <section className="h-[70vh] flex flex-col justify-center items-center text-center">
            <TransitionGroup>
                {isMounted &&
                    elements.map((element, i) => (
                        <CSSTransition key={i} classNames="fadeup" timeout={2000}>
                            <div
                                key={i}
                                style={isAppearing ? { transitionDelay: `${i * 100}ms` } : {}}
                            >
                                {element}
                            </div>
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </section>
    );
};

export default NotFound;
