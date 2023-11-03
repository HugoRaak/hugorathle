import * as React from "react";
import {TypingAnimate} from "./TypingAnimate";
import {useSidebarMenu} from "@hooks";

const Home = () => {
    const {isOpenMenu} = useSidebarMenu();

    return <section className={'h-[90vh] flex flex-col justify-center items-center' + (isOpenMenu ? ' blur' : '')}>
        <div className="text-left">
            <h3 className="text-2xl">Hello, I'm</h3>
            <h1 className="text-6xl font-bold text-orange py-2">Hugo Rathle.</h1>
            <h1 className="text-6xl font-bold opacity-40 dark:opacity-70 py-2">A full-stack developer.</h1>
            <h2 className="text-4xl py-2">
                I'm{" "}<TypingAnimate/>
            </h2>
        </div>
    </section>;
};

export default Home;