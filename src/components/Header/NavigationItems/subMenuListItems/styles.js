import styled from "styled-components";

export const Container = styled.ul`
    margin: 20px 0 0 0;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};

    li {
        margin: 15px 15px 0 15px;
        font-size: 0.875rem;
        display: flex;
        gap: 10px;
        align-items: center;
    }

    li a {
        justify-self: flex-start;
    }

    @media (min-width: 1024px) {
        min-width: 120px;
        display: block;
        position: absolute;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        right: 0;
        top: 30px;
        opacity: 0;
        z-index: -1;
        transition: 0.3s;

        li {
            margin-bottom: 15px;
        }

        li a {
            transition: 0.3s;
        }

        li a:hover {
            color: #181818;
        }
    }
`;
