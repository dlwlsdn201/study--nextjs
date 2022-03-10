import '../styles/globals.css';
import GlobalStyle from '../styles/GlobalStyle.ts';
import { theme } from '../styles/Theme.ts';
import { ThemeProvider } from 'styled-components';
import Test from './test';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
