import React from "react";
import MenuBtn from "../MenuBtn/MenuBtn";
import MenuListItems from "./MenuListItems/MenuListItems";
import { Container } from "./styles";

function NavigationItems() {
    return (
        <Container>
            <MenuListItems />
            <MenuBtn />
        </Container>
    );
}

export default NavigationItems;
