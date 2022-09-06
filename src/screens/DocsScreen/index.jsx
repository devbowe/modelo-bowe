import Head from "next/head";
import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import DocumentationCard from "../../components/DocumentationCard";
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
    const [currentActive, setCurrentActive] = useState("sections");
    const { data, setData } = useData();

    console.log(data);

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

                <S.SpaceItems>
                    {data && <RenderLists render={currentActive} data={data} />}
                </S.SpaceItems>
            </Container>
        </Layout>
    );
};

function RenderLists(props) {
    if (props.render === "components") {
        return <div></div>;
    }

    if (props.render === "sections") {
        return (
            <div>
                {props.data.sections.map((item) => (
                    <DocumentationCard key={item.titulo} {...item} />
                ))}
            </div>
        );
    }
}

export default DocsScreen;
