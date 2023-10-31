import * as React from "react";
import {Navbar} from "./navbar/Navbar";
import {Separator} from "@components";
import {Title} from "./Title";

const Home = () => {
    return <div className="h-screen flex flex-col">
        <Navbar/>
        <Separator/>
        <Title/>
    </div>;
};

export default Home;