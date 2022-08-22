import React from "react";
import * as S from "./styles";

const Container = ({ children, ...props }) => {
    return <S.Styles {...props}>{children}</S.Styles>;
};

export default Container;
