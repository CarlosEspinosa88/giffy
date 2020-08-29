import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`

const animation = ({ 
  time = '1.2s', 
  infinite = 'infinite',
  type = 'cubic-bezier(0.5, 0, 0.5, 1)'
} = {}) => css`animation: ${time} ${rotate} ${type} ${infinite}`

export const Container = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 auto;
  width: 80px;
  height: 80px;
`

export const Internal = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #8c58a3;
  border-radius: 50%;
  border-color: #8c58a3 transparent transparent transparent;
  ${animation};

  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`
