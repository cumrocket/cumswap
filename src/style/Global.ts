import { createGlobalStyle } from 'styled-components'

// background-color: ${({ theme }) => theme.colors.background};

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('/images/bg.jpg')

    img {
      height: auto;
      max-width: 100%;
    }
  }

  ul {
    list-style: none; 
  }

  li {
    display: flex;
    align-items: center;
  }

  li::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }
`
export default GlobalStyle
