import 'dotenv/config'; // initial .env loading
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import LoginContextProvider from './Context/loginContext';
import GlobalStyle from './GlobalStyles';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <LoginContextProvider>
      <GlobalStyle />
      <App />
    </LoginContextProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
