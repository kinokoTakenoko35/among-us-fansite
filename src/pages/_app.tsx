import { AppProps } from "next/app";
import Head from "next/head";
import { config } from "../../site.config";
//Conponents
import { Nav } from "../pages/components/Nav";
import { Footer } from "../pages/components/Footer";
import "../../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href={`${config.siteRoot}`} />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
