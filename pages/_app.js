import '../styles/globals.css';
import GlobalStyle from '../styles/GlobalStyle.ts';
import { theme } from '../styles/Theme.ts';
import { ThemeProvider } from 'styled-components';
<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css';
import Top from './../src/components/Top';
import Footer from './../src/components/Footer';
=======
import Test from './test';

>>>>>>> 334964518fe451d0b79f99a7f7fc3243c33b7618
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Top />
      <Footer />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
