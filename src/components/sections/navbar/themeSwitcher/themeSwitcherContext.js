import React, {createContext, useRef} from "react";
import {ThemeSwitcher} from "./ThemeSwitcher";

export const ThemeSwitcherContext = createContext({themeSwitcherRef: {current: <ThemeSwitcher/>}});

const ThemeSwitcherContextProvider = ({children}) => {
    const themeSwitcherRef = useRef(<ThemeSwitcher/>);

    return <ThemeSwitcherContext.Provider value={{themeSwitcherRef}}>
        {children}
    </ThemeSwitcherContext.Provider>;
};

export default ThemeSwitcherContextProvider;