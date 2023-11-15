import {useContext} from "react";
import {ThemeSwitcherContext} from "@components/navbar/themeSwitcher/themeSwitcherContext";

const useThemeSwitcher = () => {
    const {themeSwitcherRef} = useContext(ThemeSwitcherContext);
    return {themeSwitcherRef};
};

export default useThemeSwitcher;