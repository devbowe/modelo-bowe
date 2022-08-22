import styled from "styled-components";

export const Styles = styled.div`
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    min-height: 100vh;

    header {
        align-self: start;
    }

    footer {
        align-self: end;
    }
`;
