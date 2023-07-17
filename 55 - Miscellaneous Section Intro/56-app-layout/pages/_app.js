import Head from "next/head";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import "../styles/globals.css";
import "../styles/layout.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>APP TITLE Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
