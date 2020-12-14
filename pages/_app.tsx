import "../styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react"


interface MyAppProps {
  Component: React.ComponentClass<any>,
  pageProps: React.ReactPropTypes
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
