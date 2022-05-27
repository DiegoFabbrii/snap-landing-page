import React from "react";
import Button from "./Button/Button";
import LogoImages from "./LogoImages/LogoImages";
import { Container, Text, Title } from "./styles";

function TextContent() {
    return (
        <Container>
            <Title>
                Make <span></span> remote work
            </Title>
            <Text>
                Get your team in sync, no matter your location. Streamline
                processes, create team, rituals and watch productivity soar.
            </Text>

            <Button />

            <LogoImages />
        </Container>
    );
}

export default TextContent;
