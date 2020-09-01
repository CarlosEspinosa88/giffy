import styled, { createGlobalStyle } from 'styled-components'

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

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-color: #282c34;
    font-size: calc(10px + 2vmin);
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #282c34;
  }
`
