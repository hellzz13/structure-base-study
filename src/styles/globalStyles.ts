import { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;

    }
    .container {
        margin: auto;
        height: 90vh;
        width: 50%;
        padding: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

    }
    body {
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};
    }


`