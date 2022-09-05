// import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import Heading from "../Heading";
import * as S from "./styles";

const DocumentationCard = ({ titulo, codigo, descricao, imagem }) => {
    const [showCoppied, setShowCoppied] = useState(false);

    function handleCLick(text) {
        window.navigator.clipboard.writeText(text);

        setShowCoppied(true);

        setTimeout(() => {
            setShowCoppied(false);
        }, 2000);
    }

    return (
        <S.CardWrapper>
            <Heading center="true" size="md" as="h2">
                {titulo}
            </Heading>
            <p>{descricao}</p>
            <S.ImageWrapper>
                <img src={imagem.url} alt={titulo} />
            </S.ImageWrapper>
            <Button
                center="true"
                onClick={() => {
                    handleCLick(codigo);
                }}
                style={
                    showCoppied
                        ? { pointerEvents: "none" }
                        : { pointerEvents: "unset" }
                }
            >
                {!showCoppied ? "Copiar código HTML" : "Copiado!"}
            </Button>
        </S.CardWrapper>
    );
};

export default DocumentationCard;
