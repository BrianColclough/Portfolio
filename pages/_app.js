import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component className="bg-ui-white" {...pageProps} />;
}

export default MyApp;
