import styled, { css } from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    display: block;
    font-size: 1rem;
    padding: 0.5rem 1.25rem;
    border-radius: 4px;

    background-color: ${(props) => props.theme.colors.accentThird};
    color: ${(props) => props.theme.colors.light};
    font-weight: 600;

    &:focus,
    &:hover {
        filter: brightness(0.8);
        transition: filter 300ms ease;
    }

    ${(props) =>
        props.center &&
        css`
            max-width: max-content;
            margin-inline: auto;
        `}
`;
