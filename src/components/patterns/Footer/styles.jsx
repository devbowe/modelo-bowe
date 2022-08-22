import styled from "styled-components";

export const Wrapper = styled.footer`
    background: #222;
    padding-block: 1rem;

    p {
        text-align: center;
        font-size: 0.85rem;
        opacity: 0.8;
        letter-spacing: 1.5px;

        a {
            color: ${(props) => props.theme.colors.accentFirst};
        }
    }
`;
