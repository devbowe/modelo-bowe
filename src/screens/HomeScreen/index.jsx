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

            <Container></Container>
        </Layout>
    );
};

export default HomeScreen;
