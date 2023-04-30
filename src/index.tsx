import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles, theme } from './styles/index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root')  as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter basename="/tweets">
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
