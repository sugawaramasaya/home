import { ThemeProvider } from 'theme-ui';
import theme from '../styles/theme';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
