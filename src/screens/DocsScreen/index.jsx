import Head from "next/head";
import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Layout from "../../components/patterns/Layout";
import * as S from "./styles";

const listToRender = [
    {
        label: "Seções",
        id: "sections",
    },
    {
        label: "Componentes",
        id: "components",
    },
];

const DocsScreen = () => {
    const [currentActive, setCurrentActive] = useState("");

    function handleToggleActive(newActive) {
        setCurrentActive(newActive);
    }

    useEffect(() => {
        console.log(currentActive);
    }, [currentActive]);

    return (
        <Layout>
            <Container>
                <Head>
                    <title>Documentação - MVP</title>
                    <meta name="description" content="" />
                </Head>

                <Heading as="h2" size="lg" center spacing gradient>
                    Documentação
                </Heading>

                <S.CustomListRender>
                    {listToRender.map((item) => (
                        <S.CustomListRenderItem
                            key={item.id}
                            onClick={() => handleToggleActive(item.id)}
                            active={
                                currentActive === item.id ? "true" : "false"
                            }
                        >
                            {item.label}
                        </S.CustomListRenderItem>
                    ))}
                </S.CustomListRender>

                <div>{currentActive}</div>
            </Container>
        </Layout>
    );
};

export default DocsScreen;
