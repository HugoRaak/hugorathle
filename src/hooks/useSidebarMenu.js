import {useContext} from "react";
import {SidebarMenuContext} from "@components/sections/sidebarMenu/sidebarMenuContext";

const useSidebarMenu = () => {
    const {isOpenMenu, toggleIsOpenMenu} = useContext(SidebarMenuContext);
    return {isOpenMenu, toggleIsOpenMenu};
};

export default useSidebarMenu;