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
    display: flex;
    justify-content: center;
    margin-block: 2rem;

    img {
        object-fit: cover;
    }
`;
