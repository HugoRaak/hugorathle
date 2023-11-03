import React, {createContext, useCallback, useState} from "react";

export const SidebarMenuContext = createContext({isOpenMenu: false, toggleIsOpenMenu: () => {}});

const SidebarMenuContextProvider = ({children}) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const toggleIsOpenMenu = useCallback(() => setIsOpenMenu(!isOpenMenu), [isOpenMenu]);

    return <SidebarMenuContext.Provider value={{isOpenMenu, toggleIsOpenMenu}}>
        {children}
    </SidebarMenuContext.Provider>;
};

export default SidebarMenuContextProvider;