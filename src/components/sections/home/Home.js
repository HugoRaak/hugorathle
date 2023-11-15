import * as React from "react";
import {TypingAnimate} from "./TypingAnimate";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useEffect, useState} from "react";

const Home = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isAppearing, setIsAppearing] = useState(true);

    const titles = [
        <h1 className="text-sm 2xs:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">Hello, I'm</h1>,
        <h2 className="text-3xl 2xs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-orange py-2">Hugo Rathle.</h2>,
        <h3 className="text-3xl 2xs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold opacity-40 dark:opacity-70 py-2">A full-stack developer.</h3>,
        <h4 className="text-lg 2xs:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
            I'm{" "}<TypingAnimate/>
        </h4>
    ]

    useEffect(() => {
        const timeoutMounted = setTimeout(() => setIsMounted(true), 1200);
        const timeoutAppearing = setTimeout(() => setIsAppearing(false), 2000);

        return () => {
            clearTimeout(timeoutMounted);
            clearTimeout(timeoutAppearing);
        }
    }, []);

    return <section className="h-screen flex flex-col justify-center items-center tablet-xs:px-[5vw] tablet:px-[10vw] tablet-lg:px-[15vw] sm:px-0">
        <div className="text-left mt-[10vh]">
            <TransitionGroup>
                {isMounted && titles.map((title, i) => <CSSTransition key={i} classNames="fadeup" timeout={2000}>
                    <div style={isAppearing ? { transitionDelay: `${i * 100}ms` } : {}}>{title}</div>
                </CSSTransition>)}
            </TransitionGroup>
        </div>
    </section>;
};

export default Home;