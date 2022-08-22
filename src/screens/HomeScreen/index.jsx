import React, { useEffect, useState } from "react";
import Layout from "../../components/patterns/Layout";
import request from "graphql-request";
import Container from "../../components/Container";
import Image from "next/image";
import Head from "next/head";
import Button from "../../components/Button";

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
                        <div
                            key={sec.titulo}
                            style={{ border: "1px solid gray" }}
                        >
                            <h2>{sec.titulo}</h2>
                            <p>{sec.descricao}</p>
                            <Image
                                src={sec.imagem.url}
                                alt={sec.titulo}
                                width={500}
                                height={200}
                            />
                            <Button
                                onClick={() => {
                                    window.navigator.clipboard.writeText(
                                        sec.codigo
                                    );
                                }}
                            >
                                Copiar código HTML
                            </Button>
                        </div>
                    ))}
            </Container>
        </Layout>
    );
};

export default HomeScreen;
