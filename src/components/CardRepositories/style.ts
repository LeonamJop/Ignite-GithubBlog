import styled from "styled-components"

export const CardContainer = styled.div`
    width: 26rem;

    padding: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    background-color: ${props => props.theme['base-post']};

    border-radius: 10px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }


    h2 {
        size: 14px;
        color: ${props => props.theme['base-title']};
    }

    span {
        size: 12px;
        color: ${props => props.theme['base-span']};
    }

    p {
        max-width: 22rem;
        max-height: 7rem;
        size: 12px;
        color: ${props => props.theme['base-span']};

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`