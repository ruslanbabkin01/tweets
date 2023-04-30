import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root')  as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter basename="/tweets">
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
