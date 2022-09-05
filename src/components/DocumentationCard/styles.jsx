import styled from "styled-components";

export const CardWrapper = styled.article`
    padding: 1.25rem;

    h2 {
        text-align: center;
        margin-bottom: 1.75rem;
    }

    p {
        margin-bottom: 1.25rem;
    }

    button {
        margin-top: 1.25rem;
    }
`;

export const ImageWrapper = styled.div`
    display: grid;
    margin-block: 2rem;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;
