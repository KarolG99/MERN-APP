import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    *, *::after, *::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }
    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;
