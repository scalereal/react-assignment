import { createGlobalStyle } from "styled-components";
import appTheme from "../../theme";

export const GlobalCss = createGlobalStyle`
    html {
        height: 100%;
        width: 100%;
        scroll-behavior: smooth;
        ${appTheme.font.defaults}
    }
    * {
        margin: 0;
        padding: 0;
    }
`;
