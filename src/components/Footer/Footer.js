import React from "react";
import { SnapLandingPageFooter } from "./styles";

function Footer() {
    return (
        <SnapLandingPageFooter>
            Challenge by{" "}
            <a
                href="https://www.frontendmentor.io/"
                target="_blank"
                rel="noreferrer"
            >
                Frontend Mentor.
            </a>{" "}
            <br />
            Coded by{" "}
            <a
                href="https://github.com/DiegoFabbrii"
                target="_blank"
                rel="noreferrer"
            >
                Diego Fabbri
            </a>
            .
        </SnapLandingPageFooter>
    );
}

export default Footer;
