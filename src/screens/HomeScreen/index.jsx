import React, { useEffect, useState } from "react";
import Layout from "../../components/patterns/Layout";
import request from "graphql-request";
import Container from "../../components/Container";
import Head from "next/head";
import DocumentationCard from "../../components/DocumentationCard";

async function api_fetch() {
    try {
        const response = await request(
            "https://api-sa-east-1.hygraph.com/v2/cl74uej0y4i7l01uhdsr17qso/master",
            `
            query SecoesQuery {
                secoes {
                  codigo
                  descricao
                  imagem {
                    url
                  }
                  titulo
                }
              }
            `
        );

        if (response) {
            return response;
        } else {
            return;
        }
    } catch (err) {
        throw new Error("Something went wrong...");
    }
}

const HomeScreen = () => {
    const [secoes, setSecoes] = useState([]);

    useEffect(() => {
        (async () => {
            const { secoes } = await api_fetch();
            setSecoes(secoes);
        })();
    }, []);

    return (
        <Layout>
            <Head>
                <title>Modelo Bowe - MVP</title>
                <meta name="description" content="" />
            </Head>

            <Container>
                {secoes &&
                    secoes.map((sec) => (
                        <DocumentationCard key={sec.titulo} {...sec} />
                    ))}
            </Container>
        </Layout>
    );
};

export default HomeScreen;
