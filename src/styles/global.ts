import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        max-width: 85.375rem;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme['base-background']};
        color: ${props => props.theme['base-text']};
    }


    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }
`