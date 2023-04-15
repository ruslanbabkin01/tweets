import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles, theme } from '../src/styles/index';
import { Global, ThemeProvider } from '@emotion/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
        <App />
    </ThemeProvider>
  </React.StrictMode>
);
