import styled from "styled-components";

export const CustomWrapper = styled.div`
    a {
        border-bottom: 1px solid ${(props) => props.theme.colors.accentSecond};
        font-weight: 500;
    }

    > div {
        font-size: 1.5rem;
        margin-top: 2rem;
    }
`;
