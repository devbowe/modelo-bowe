import Link from "next/link";
import React from "react";
import Container from "../../Container";
import * as S from "./styles";
import { headerLinks } from "../../../common/headerLinks";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
    const router = useRouter();

    return (
        <S.Wrapper>
            <Container>
                <S.Content>
                    <Image
                        src="/images/logo.svg"
                        width={100}
                        height={45}
                        alt=""
                    />
                    <nav>
                        {headerLinks.map((link) => (
                            <S.LinkWrapper
                                key={link.path}
                                active={
                                    router.pathname === link.path ? true : false
                                }
                            >
                                <Link href={link.path}>{link.label}</Link>
                            </S.LinkWrapper>
                        ))}
                    </nav>
                </S.Content>
            </Container>
        </S.Wrapper>
    );
};

export default Header;
