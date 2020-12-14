import "../styles/globals.scss";

interface MyAppProps {
  Component: React.ComponentClass<any>,
  pageProps: React.ReactPropTypes
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp;
