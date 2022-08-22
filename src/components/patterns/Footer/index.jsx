import React from "react";
import * as S from "./styles";
import Container from "../../Container";

const Footer = () => {
    return (
        <S.Wrapper>
            <Container>
                <p>
                    &copy; Copyright {new Date().getFullYear()} -{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https:bowe.com.br/"
                    >
                        Bowe
                    </a>
                </p>
            </Container>
        </S.Wrapper>
    );
};

export default Footer;
