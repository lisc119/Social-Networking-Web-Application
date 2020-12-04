import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* { 
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    color: "#242323";
    font-size: 16px;
 }
 button {
    border-radius: 100px;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  .line{
    border-bottom: 1px solid #f2f2f2;
  }
  .avatar {
    color: #a580ff;
  }
 `;

export const defaultTheme = {
  violet: "#8C6CB2",
  linearGradient: "linear-gradient(102deg, #c568ff 0%, #6e91f6)",
  fontSize: "16px",
  borderRadius: "6px",
  primaryColor: "#ce2222",
  secondayColor: "#ffffff",
  primaryBlue: "hsl(221, 56%, 46%)",
};
