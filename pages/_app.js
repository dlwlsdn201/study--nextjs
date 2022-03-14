import '../styles/globals.css';
import GlobalStyle from '../styles/GlobalStyle.ts';
import { theme } from '../styles/Theme.ts';
import { ThemeProvider } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import Top from './../src/components/Top';
import Footer from './../src/components/Footer';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <GlobalStyle />
      <Top />
      <Footer />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
