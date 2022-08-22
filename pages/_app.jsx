/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Theme from "../src/theme";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Theme>
                <Head>
                    <link
                        rel="shortcut png"
                        href="/images/favicon.png"
                        type="image/png"
                    />

                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <Component {...pageProps} />
            </Theme>
        </>
    );
}

export default MyApp;
