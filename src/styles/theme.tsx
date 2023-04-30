import { DefaultTheme } from "styled-components";
import { Theme } from "../types/theme";

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

export const theme :DefaultTheme= Object.freeze({
  colors: {
    black: '#373737',
    gray: '#EBD8FF',
    green: '#5CD3A8',
    blue: '#5736A3',
  },
  fontSize: {
    s: '16px',
    m: '18px',
    l: '20px',
    xl: '26px',
  },
  fontWeight: {
    medium: 500,
    semiBold: 600,
  },
});
