export const breakpoints = ['320', '768', '1280'];

export const theme = Object.freeze({
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
  spacing: value => `${4 * value}px`,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  shadows: {
    regular: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  breakpoints: [
    `${breakpoints[0]}px`,
    `${breakpoints[1]}px`,
    `${breakpoints[2]}px`,
  ],
  mq: {
    mobileOnly: `@media screen and (max-width: ${+breakpoints[1] - 1}px)`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints[1]
    }px) and (max-width: ${+breakpoints[2] - 1}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[2]}px)`,
  },
});
