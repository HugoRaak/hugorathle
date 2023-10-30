import ReactTyped from "react-typed";
import * as React from "react";

export const Title = () => {
    return <div className="flex-grow flex flex-col justify-center items-center">
        <div className="text-left">
            <h3 className="text-2xl">Hello, I'm</h3>
            <h1 className="text-6xl font-bold text-orange py-2">Hugo Rathle.</h1>
            <h1 className="text-6xl font-bold opacity-40 dark:opacity-70 py-2">A full-stack developer.</h1>
            <div className="flex py-2">
                <h2 className="text-4xl">I'm{" "}
                <ReactTyped strings={["passionate", "versatile", "serious", "creative", "curious"]}
                            typeSpeed={100} backSpeed={50} loop
                            className="text-orange"/>
                </h2>
            </div>
        </div>
    </div>
}