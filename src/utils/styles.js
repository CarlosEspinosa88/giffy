import styled, { createGlobalStyle } from 'styled-components'

export const theme = { 
  colors: { 
    white: "#F1F2EB", 
    grey: "#D8DAD3", 
    black: "#282c34", 
  }, 
  font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica', Neue', sans-serif"
}

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => `
    html {
      box-sizing: border-box;
      background-color: ${theme.colors.black};
      font-size: calc(10px + 2vmin);
      font-family: 'Barlow Semi Condensed', sans-serif;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }
  
    body {
      margin: 0;
      background-color: ${theme.colors.black};
    `
  }
  `

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin: 30px 0;
  cursor: pointer;
`
export const Layout = styled.div`
  min-height:  100vh;
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white 
`

export const CardContainer = styled.div`
  text-align: left;
  width: 100%;
  background-color: #25282e;
  padding: 30px;
  border-radius: 0;
`

export const Subtitle = styled.h3`
  color: magenta;
  padding-bottom: 20px;
  border-bottom: 2px solid;
`