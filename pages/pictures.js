import Head from "next/head";
import Layout from "../components/layout";
import PictureViewer from "../components/pictureViewer";
import Header from "../components/title";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian Colclough</title>
        <meta
          name="description"
          content="Page to display my pictures that I have taken"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PictureViewer />
      </Layout>
    </div>
  );
}
