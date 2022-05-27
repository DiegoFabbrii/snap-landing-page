import React from "react";
import Banner from "./Banner/Banner";
import { Container } from "./styles";
import TextContent from "./TextContent/TextContent";

function Main() {
    return (
        <Container>
            <Banner />
            <TextContent />
        </Container>
    );
}

export default Main;
