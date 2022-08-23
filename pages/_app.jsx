/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../src/theme/GlobalStyles";
import { ResetStyles } from "../src/theme/ResetStyles";
import { theme } from "../src/theme/theme";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <link
                    rel="shortcut icon"
                    href="/images/favicon.ico"
                    type="image/png"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <ResetStyles />
            <GlobalStyles />

            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
