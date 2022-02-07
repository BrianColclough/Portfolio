import Intro from "../components/intro";
import Layout from "../components/layout";
import Resume from "../components/resume";
import Header from "../components/title";

export default function Home() {
  return (
    <>
      <Layout>
        <Intro />
        <Resume />
      </Layout>
    </>
  );
}
