import styled from "styled-components";
import css from "styled-jsx/css";

export const Wrapper = styled.header`
    border-bottom: 1px solid #333;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1rem;
    color: #888;

    nav {
        display: flex;
        gap: 1.5rem;
    }
`;

export const LinkWrapper = styled.div`
    ${(props) =>
        props.active &&
        css`
            color: #fdfdfd;
        `}

    position: relative;

    &::after,
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        opacity: 0;
        background: linear-gradient(
            135deg,
            ${(props) => props.theme.colors.accentThird},
            ${(props) => props.theme.colors.accentFirst}
        );
    }

    &:hover::after,
    &:focus::after {
        transition: all 250ms linear;
        opacity: 1;
    }
`;
