import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`  
* {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Quicksand', sans-serif;
    font-size: 1em;
    font-weight: 400;
    margin: 0;
  }

  h3 {
    line-height: 1.2;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }

  p {
    line-height: 1.5;
    font-size: 1.2em;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles