import React, { useContext } from "react";
import Buttons from "../LoginRegisterBtn/Buttons";
import { menuList } from "../MenuListData";
import SubMenuListItems from "../subMenuListItems/SubMenuListItems";
import { Background, Container, Li, ListItems, MenuItem } from "./styles";
import Arrow from "../../../../assets/images/icon-arrow-down.svg";
import { MenuMobContext } from "../../../contexts/contexts";

function MenuListItems() {
    const { subMenuHandleClick, isSubMenuOpen, isMenuOpen } =
        useContext(MenuMobContext);

    return (
        <>
            <Background isMenuOpen={isMenuOpen} />
            <Container isMenuOpen={isMenuOpen}>
                <ListItems>
                    {menuList.map((item, index) => {
                        const isOpen = isSubMenuOpen === item.title;
                        return (
                            <Li key={index} isOpen={isOpen}>
                                {item.subMenu ? (
                                    <>
                                        <MenuItem>
                                            <span
                                                onClick={() =>
                                                    subMenuHandleClick(
                                                        item.title
                                                    )
                                                }
                                            >
                                                {item.title}
                                            </span>
                                            <img src={Arrow} alt="Arrow icon" />
                                        </MenuItem>

                                        <SubMenuListItems
                                            subMenu={item.subMenu}
                                            isOpen={isOpen}
                                        />
                                    </>
                                ) : (
                                    <a href="#">{item.title}</a>
                                )}
                            </Li>
                        );
                    })}
                </ListItems>

                <div>
                    <Buttons />
                </div>
            </Container>
        </>
    );
}

export default MenuListItems;
