import Head from "next/head";
import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Layout from "../../components/patterns/Layout";
import * as S from "./styles";

import { useData } from "../../context/DataContext";
import api_fetch from "../../services/api_fetch";

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
    const { data, setData } = useData();

    useEffect(() => {
        (async () => {
            if (!data) {
                const { secoes } = await api_fetch();
                setData({ sections: secoes });
            } else {
                return;
            }
        })();
    }, []);

    function handleToggleActive(newActive) {
        setCurrentActive(newActive);
    }

    return (
        <Layout>
            <Container>
                <Head>
                    <title>Documentação - MVP</title>
                    <meta name="description" content="" />
                </Head>

                <Heading
                    as="h2"
                    size="lg"
                    center="true"
                    spacing="true"
                    gradient="true"
                >
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

                {data.sections && currentActive === "sections" && (
                    <h1>Lista de seções</h1>
                )}
                {data.components && currentActive === "components" && (
                    <h1>Lista de componentes</h1>
                )}
            </Container>
        </Layout>
    );
};

export default DocsScreen;
