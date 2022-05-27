import React from "react";
import { MainBanner } from "./styles";
import BannerImgDesktop from "../../../assets/images/image-hero-desktop.png";
import BannerImgMobile from "../../../assets/images/image-hero-mobile.png";

function Banner() {
    return (
        <MainBanner>
            <picture>
                <source media="(min-width: 912px)" srcSet={BannerImgDesktop} />
                <img src={BannerImgMobile} alt="Banner" />
            </picture>
        </MainBanner>
    );
}

export default Banner;
