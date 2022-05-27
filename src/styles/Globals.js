import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Epilogue', sans-serif;
    }


    body {
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #FAFAFA;
        
        @media(max-width: 760px) {
            
        }
        
    }
`;
