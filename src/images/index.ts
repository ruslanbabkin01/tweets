declare module '*.png' {
  const iconBg: string;
  export default iconBg;
}

declare module '*.jpeg' {
  const screen: string;
  export default screen;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;

    const logo: string;
    export default logo;
}


