import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (min-width: 1280px) {
        max-width: 400px;
        margin-top: 110px;
    }
`;

export const ContainerImg = styled.div`
    img {
        width: 100%;
    }
`;
