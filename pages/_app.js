import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if (Component.getLayout) {
    return (
      <SessionProvider session={session}>
        {Component.getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    );
  }

  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>Next JS elRed</title>
          <meta name="description" content="Next JS Practice App" />
        </Head>
        <Header />
        <div className="content">
          <Component {...pageProps} />
        </div>
        <Footer />
      </SessionProvider>
    </>
  );
}
