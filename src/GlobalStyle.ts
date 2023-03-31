import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(167.96deg, #8257E5 0%, #271A45 100%);
    height: 100vh
    }
`;
