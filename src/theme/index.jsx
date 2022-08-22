import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { ResetStyles } from "./ResetStyles";
import { theme } from "./theme";

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <ResetStyles />
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
