import React, { createContext, useState } from "react";

export const MenuMobContext = createContext();

function MenuContextProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(null);

    const menuHandleClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSubMenuOpen(null);
    };

    const subMenuHandleClick = (item) => {
        if (item === isSubMenuOpen) return setIsSubMenuOpen(null);
        setIsSubMenuOpen(item);
    };

    return (
        <MenuMobContext.Provider
            value={{
                isMenuOpen,
                menuHandleClick,
                isSubMenuOpen,
                subMenuHandleClick,
            }}
        >
            {children}
        </MenuMobContext.Provider>
    );
}

export default MenuContextProvider;
