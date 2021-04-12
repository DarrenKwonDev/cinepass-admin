import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body {
        padding:0;
        margin:0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
    }
    * {
        box-sizing:border-box; 
    }
    a {
        text-decoration:none;
        color: inherit;
    }
`;

export default GlobalStyle;
