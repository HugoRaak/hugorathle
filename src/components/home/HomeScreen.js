import * as React from "react";
import {Navbar} from "./navbar/Navbar";
import {Separator} from "../Separator";
import {Title} from "./Title";

export const HomeScreen = () => {
    return <div className="h-screen flex flex-col">
        <Navbar/>
        <Separator/>
        <Title/>
    </div>
}