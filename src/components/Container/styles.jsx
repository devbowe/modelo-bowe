import styled, { css } from "styled-components";

export const Styles = styled.div`
    width: min(90%, ${(props) => props.theme.containerWidth});
    margin-inline: auto;

    ${(props) =>
        props.spacing &&
        css`
            padding-block: 4rem;
        `}
`;
