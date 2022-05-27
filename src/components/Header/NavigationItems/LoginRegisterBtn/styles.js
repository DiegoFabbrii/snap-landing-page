import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;

    @media (min-width: 1024px) {
        margin-top: 0;
        flex-direction: row;
        align-items: center;
    }
`;

export const BtnLogin = styled.button`
    padding: 12px 20px;
    border-radius: 10px;
    border: none;
    background-color: transparent;
    color: #747474;
    cursor: pointer;

    @media (min-width: 1024px) {
        font-size: 1rem;
        :hover {
            color: #181818;
        }
    }
`;

export const BtnRegister = styled(BtnLogin)`
    border: 1px solid #747474;

    @media (min-width: 1024px) {
        :hover {
            border-color: #181818;
        }
    }
`;
