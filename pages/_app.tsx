import "../styles/globals.scss";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })

interface MyAppProps {
  Component: React.ComponentClass<any>,
  pageProps: React.ReactPropTypes
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
