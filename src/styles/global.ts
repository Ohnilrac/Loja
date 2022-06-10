import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{

    /* Colors */ 
    --green: #5CA720;
    --background: #F9F9F9;
    --gray: #A5A1A1;
    --black: #161616;

    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--background);
  }

  body, button, input, textarea{
    font-family: 'Lato', sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: var(--black);
  }
`