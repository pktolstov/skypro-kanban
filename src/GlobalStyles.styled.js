import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme?.linkColor || '#000000'};
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
    background: ${({ theme }) => theme?.buttonBg || '#f0f0f0'};
    color: ${({ theme }) => theme?.buttonText || '#000000'};
    border: ${({ theme }) => theme?.buttonBorder || '1px solid #ddd'};
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    background-color: ${({ theme }) => theme?.bodyBg || '#ffffff'};
    color: ${({ theme }) => theme?.textColor || '#000000'};
    transition: all 0.25s ease;
  }

  ._orange {
    background-color: ${({ theme }) => theme?.orangeBg || '#ffe4c2'};
    color: ${({ theme }) => theme?.orangeText || '#ff6d00'};
  }

  ._green {
    background-color: ${({ theme }) => theme?.greenBg || '#b4fdd1'};
    color: ${({ theme }) => theme?.greenText || '#06b16e'};
  }

  ._purple {
    background-color: ${({ theme }) => theme?.purpleBg || '#e9d4ff'};
    color: ${({ theme }) => theme?.purpleText || '#9a48f1'};
  }

  ._gray {
    background-color: ${({ theme }) => theme?.grayBg || '#94a6be'};
    color: ${({ theme }) => theme?.grayText || '#ffffff'};
  }
`
