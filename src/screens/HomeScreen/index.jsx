import React from "react";
import Layout from "../../components/patterns/Layout";
import Container from "../../components/Container";
import Head from "next/head";

const HomeScreen = () => {
    return (
        <Layout>
            <Head>
                <title>Modelo Bowe - MVP</title>
                <meta name="description" content="" />
            </Head>

            <Container>
                <h2>
                    Acesse nosso documento CSS:
                    <a
                        href="https://modelo-bowe-codes.vercel.app/assets/index.6bf3d4b8.css"
                        target="_blank"
                        rel="noreferrer nofollow"
                    >
                        {" "}
                        Aqui
                    </a>
                </h2>
            </Container>
        </Layout>
    );
};

export default HomeScreen;
