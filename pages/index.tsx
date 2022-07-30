import Intro from "../components/intro";
import Layout from "../components/layout";
import Resume from "../components/resume";
import CurrentlyLearning from "../components/currentlyLearning";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <CurrentlyLearning />
      <Resume />
    </Layout>
  );
}
