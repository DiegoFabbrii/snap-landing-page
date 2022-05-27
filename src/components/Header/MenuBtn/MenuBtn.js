import React, { useContext } from "react";
import { MenuMobContext } from "../../contexts/contexts";
import { Btn, Container } from "./styles";

function MenuBtn() {
    const { isMenuOpen, menuHandleClick } = useContext(MenuMobContext);

    return (
        <Container onClick={menuHandleClick}>
            <Btn isMenuOpen={isMenuOpen} />
        </Container>
    );
}

export default MenuBtn;
