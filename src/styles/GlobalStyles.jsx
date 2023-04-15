import { css } from '@emotion/react';

export const GlobalStyles = css`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
  }

  code {
    font-family: 'Montserrat', sans-serif;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    padding: 5px;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
