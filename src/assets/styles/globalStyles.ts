import { createGlobalStyle } from 'styled-components';

import { colors, fonts, sizes } from './styleVariables';

const GlobalStyle = createGlobalStyle`

    html, body {
      background-color: ${colors.white};
      height: 100%;
      margin: 0;
      font-size: ${sizes.fontBase};
      color: ${colors.baseFontColor};
    }
    
    .app-root {
      height: 100%;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  
    td, select, input, textarea, p, a, button, option, dd, dt, i, li, span {
      font-family: ${fonts.glory};
      font-size: ${sizes.fontBase};
    }
    
    h1, h2, h3, h4 {
      font-family: ${fonts.glory};
      font-weight: 700;
    }
    
    h1 {
      font-size: ${sizes.fontH1};
      color: ${colors.baseFontColor};
    }
    
    h2 {
      font-size: ${sizes.fontH2};
      color: ${colors.baseFontColor};
    }
    
    h3 {
      font-size: ${sizes.fontH3};
      color: ${colors.baseFontColor};
    }
    
    h4 {
      font-size: ${sizes.fontH4};
      color: ${colors.baseFontColor};
    }
    
    b, strong, th, label {
      font-family: ${fonts.glory};
      font-weight: 700;
    }
    
    div, dt, dd, li, a, button, label, table td, table th, select, input, textarea, p {
      font-size: ${sizes.fontBase};
    }
`;

export default GlobalStyle;
