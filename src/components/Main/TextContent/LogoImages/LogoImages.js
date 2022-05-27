import React from "react";
import { images } from "./dataImg";
import { Container, ContainerImg } from "./styles";

function LogoImages() {
    return (
        <Container>
            {images.map((item, index) => {
                return (
                    <ContainerImg key={index}>
                        <img src={item.img} alt={item.title} />
                    </ContainerImg>
                );
            })}
        </Container>
    );
}

export default LogoImages;
