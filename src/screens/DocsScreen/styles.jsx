import styled, { css } from "styled-components";

export const CustomListRender = styled.ul`
    --clr: #333;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    border-bottom: 2px solid var(--clr);

    width: 100%;
    max-width: 40rem;
    margin-inline: auto;
    position: relative;
    margin-top: 2rem;

    &::after {
        content: "";
        background-color: var(--clr);
        height: 100%;
        width: 2px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
    }
`;

export const CustomListRenderItem = styled.li`
    text-align: center;
    padding-bottom: 1rem;
    color: #cecece;
    font-size: 1.125rem;
    cursor: pointer;
    font-weight: 500;

    ${(props) =>
        props.active === "true" &&
        css`
            color: ${(props) => props.theme.colors.accentFirst};
        `}
`;
