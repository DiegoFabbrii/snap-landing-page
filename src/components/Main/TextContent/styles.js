import styled from "styled-components";

export const Container = styled.div`
    padding: 30px 30px;
    text-align: center;

    @media (min-width: 912px) {
        width: 50%;
        padding: 100px 80px 0 0;
        text-align: initial;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;

    @media (max-width: 375px) {
        font-size: 1.5rem;
    }

    @media (min-width: 912px) {
        font-size: 2.5rem;
        span {
            margin: 0 200px;
        }
    }

    @media (min-width: 1280px) {
        font-size: 3.5rem;
    }
`;

export const Text = styled.p`
    line-height: 23px;
    margin: 20px 0;

    @media (min-width: 912px) {
        margin: 40px 0;

        span {
            margin: 0 100px;
        }
    }
`;
