import Head from "next/head";
import Layout from "../components/layout";
import PictureViewer from "../components/pictureViewer";

export default function Home() {
  return (
    <Layout>
      <PictureViewer />
    </Layout>
  );
}
