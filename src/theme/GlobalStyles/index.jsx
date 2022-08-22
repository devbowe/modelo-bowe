import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Open Sans', sans-serif;
    }

    html {
        font-size: 93.75%;

        @media (min-width: 45em) {
            font-size: 100%;
        }
    }

    body {
        background-color: ${(props) => props.theme.colors.dark};
        color: ${(props) => props.theme.colors.light};
    }

    .container {
        width: min(90%, ${(props) => props.theme.containerWidth});
        margin-inline: auto;
    }
`;
