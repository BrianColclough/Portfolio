import Footer from "./footer";
import Header from "./title";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div className="relative bg-ui-white min-h-screen pb-24">
      <Head>
        <title>Brian Colclough</title>
        <meta
          name="description"
          content="Brian Colclough's personal website and portfolio site for photography and web development"
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
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
