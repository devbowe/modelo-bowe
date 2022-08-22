import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import * as S from "./styles";

const Layout = ({ children }) => {
    return (
        <S.Styles>
            <Header />
            <main>{children}</main>
            <Footer />
        </S.Styles>
    );
};

export default Layout;
