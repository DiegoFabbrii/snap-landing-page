import React from "react";
import NavigationItems from "./NavigationItems/NavigationItems";
import { Container, Logo, SnapLandingPageHeader } from "./styles";

function Header() {
    return (
        <SnapLandingPageHeader>
            <Container>
                <Logo>
                    <a href="/">snap</a>
                </Logo>
                <NavigationItems />
            </Container>
        </SnapLandingPageHeader>
    );
}

export default Header;
