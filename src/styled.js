import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  body{
    width:100%;
    padding:5%;
    background-color:#E3D781;
    
  }
`;

export default GlobalStyle;
