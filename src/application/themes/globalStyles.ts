import { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;

    }

    body {
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};
    }


`