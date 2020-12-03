import { AppProps } from "next/app";
import Head from "next/head";
import { config } from "../../site.config";
//Styles
import { Nav } from "../pages/components/Nav";
import "../../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href={`${config.siteRoot}`} />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
