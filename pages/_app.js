import Head from "next/head";
import Script from "next/script";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>QCare</title>
        <link rel="icon" href="/q-logo-clean.ico" />
        {/* <script>
        {(function (d) {
          const s = d.createElement("script");
          s.setAttribute("data-account", "6zGvCWdGCA");
          s.setAttribute("src", "https://cdn.userway.org/widget.js");
          (d.body || d.head).appendChild(s);
        })(document)}
      </script> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="New York's first Laboratory devoted to the unique needs of Women"
        />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
