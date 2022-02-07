import Head from "next/head";
import Layout from "../components/layout";
import PictureViewer from "../components/pictureViewer";
import Header from "../components/title";

export default function Home() {
  return (
    <div>
      <Layout>
        <PictureViewer />
      </Layout>
    </div>
  );
}
