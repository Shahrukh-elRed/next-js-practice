import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Next JS elRed</title>
        <meta name="description" content="Next JS Practice App" />
      </Head>
      <Header />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
