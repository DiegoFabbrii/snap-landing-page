import React from "react";
import { BtnLogin, BtnRegister, Container } from "./styles";

function Buttons() {
    return (
        <Container>
            <BtnLogin>Login</BtnLogin>
            <BtnRegister>Register</BtnRegister>
        </Container>
    );
}

export default Buttons;
