import styled from "styled-components";

export const MainBanner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
    }

    @media (min-width: 912px) {
        width: 50%;
        min-width: 350px;

        img {
            max-width: 420px;
        }
    }
`;
