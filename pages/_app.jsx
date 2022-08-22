/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Theme from "../src/theme";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Theme>
                <Head></Head>

                <Component {...pageProps} />
            </Theme>
        </>
    );
}

export default MyApp;
