import React from "react";
import * as S from "./styles";

const Heading = ({ children, as, ...props }) => {
    return (
        <S.Styles as={as} {...props}>
            {children}
        </S.Styles>
    );
};

export default Heading;
