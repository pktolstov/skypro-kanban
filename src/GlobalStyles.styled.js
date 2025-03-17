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
}

button,
._btn {
    cursor: pointer;
    outline: none;
}

ul li {
    list-style: none;
}
html,
body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: #000000;
}
._orange {
    background-color: #ffe4c2;
    color: #ff6d00;
}

._green {
    background-color: #b4fdd1;
    color: #06b16e;
}

._purple {
    background-color: #e9d4ff;
    color: #9a48f1;
}

._gray {
    background: #94a6be;
    color: #ffffff;
}
`
