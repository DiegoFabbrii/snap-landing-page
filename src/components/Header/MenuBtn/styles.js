import styled from "styled-components";

export const Container = styled.div`
    margin-left: auto;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const Btn = styled.span`
    width: 30px;
    height: 3px;
    background-color: ${(props) =>
        props.isMenuOpen ? "transparent" : "#747474"};
    transition: 0.3s;
    position: relative;

    ::after,
    ::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: #747474;
        transition: 0.3s;
    }

    ::before {
        transform: ${(props) =>
            props.isMenuOpen ? "rotate(45deg)" : "translateY(-7px)"};
    }

    ::after {
        transform: ${(props) =>
            props.isMenuOpen ? "rotate(-45deg)" : "translateY(7px)"};
    }
`;
