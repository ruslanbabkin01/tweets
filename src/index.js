import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles, theme } from '../src/styles/index';
import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <BrowserRouter basename="/tweets">
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
