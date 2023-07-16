import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import "../styles/globals.css";
import "../styles/layout.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
