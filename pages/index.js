import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Resume from "../components/resume";
import Header from "../components/title";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brian Colclough</title>
        <meta
          name="description"
          content="Personal website and portfolio for Brian Colclough"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* <Header />
      <Resume />
      <Footer /> */}
      <Layout>
        <Intro />
        <Resume />
      </Layout>
    </>
  );
}
