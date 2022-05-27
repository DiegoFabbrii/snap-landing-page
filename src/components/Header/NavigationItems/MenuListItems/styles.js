import styled from "styled-components";

export const Background = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #00000050;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
    transition: 0.3s;
    z-index: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "-1")};
`;

export const Container = styled.ul`
    padding: 90px 40px 0 40px;
    display: flex;
    flex-direction: column;
    width: 70%;
    position: fixed;
    min-height: 100vh;
    right: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "-100%")};
    bottom: 0;
    top: 0;
    background-color: #fff;
    transition: 0.3s;

    @media (min-width: 1024px) {
        background-color: transparent;
        width: 100%;
        position: initial;
        flex-direction: row;
        min-height: auto;
        justify-content: space-between;
        gap: 50px;
        margin-left: 60px;
        padding: 0;
    }
`;

export const ListItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const Li = styled.li`
    color: #747474;
    cursor: pointer;

    a {
        color: #747474;
    }

    img {
        transition: 0.3s;
        transform: ${({ isOpen }) =>
            isOpen ? "rotate(-180deg)" : "rotate(0)"};
    }

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        position: relative;
        transition: 0.3s;

        :hover {
            color: #181818;
        }

        :hover ul {
            opacity: 1;
            z-index: 0;
            color: #181818;
        }

        :hover span ~ img {
            transform: rotate(-180deg);
        }
    }
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
