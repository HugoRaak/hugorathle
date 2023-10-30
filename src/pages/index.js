import React from "react";
import {HomeScreen} from "../components/home/HomeScreen";

const IndexPage = () => {
    return <div className="text-dark dark:bg-darkTheme dark:text-white
            transition-colors transition-background duration-300 ease-out">
        <HomeScreen/>
    </div>;
}

export default IndexPage;

export const Head = () => <title>Hugo Rathle</title>;
