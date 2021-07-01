import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --black: #000;
    --white: #FFF;
    --gray: #EEE;
    --text-black: #151812;
    --text-white: #EEE;
    --primary: orange;
    --secondary: #F80;
    --shadow: #808080;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body #root {
    height: 100%;
  }

  body {
    font-family: 'Noto Sans JP', sans-serif;
  }

  @media(max-width: 1080px) {
    html {
        font-size: 93.75%;
      }
  }

  @media(max-width: 768px) {
    html {
        font-size: 87.50%;
    }
  }
`