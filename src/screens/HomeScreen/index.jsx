import React from "react";
import Layout from "../../components/patterns/Layout";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Head from "next/head";
import * as S from "./styles";
import Link from "next/link";

const HomeScreen = () => {
    return (
        <Layout>
            <Head>
                <title>Modelo Bowe - MVP</title>
                <meta name="description" content="" />
            </Head>

            <Heading
                as="h2"
                size="lg"
                center="true"
                spacing="true"
                gradient="true"
            >
                Sobre o Modelo
            </Heading>

            <Container>
                <S.CustomWrapper>
                    <p>
                        A ideia aqui é reunir todas as informações relevantes
                        para utilizar o modelo: regras, arquivos úteis, links,
                        etc. Na página de <Link href="/docs">Docs</Link> se
                        encontram todas as seções criadas e algumas observações
                        de customização.
                    </p>
                    <div>
                        Acesse o documento CSS{" "}
                        <a
                            href="https://modelo-bowe-codes.vercel.app/assets/index.6bf3d4b8.css"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            aqui
                        </a>
                        .
                    </div>
                </S.CustomWrapper>
            </Container>
        </Layout>
    );
};

export default HomeScreen;
