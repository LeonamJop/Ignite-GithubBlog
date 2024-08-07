import styled from "styled-components"

export const CardContainer = styled.div`
    width: 26rem;

    padding: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    gap: 1.25rem;

    background-color: ${props => props.theme['base-post']};

    border-radius: 10px;

    div {
        display: flex;
        justify-content: center;
        align-items: baseline;
        flex-direction: row;
    }


    h2 {
        max-width: max-content;
        font-size: 18px;
        color: ${props => props.theme['base-title']};
    }

    span {
        width: 3.313rem;
        font-size: 12px;
        color: ${props => props.theme['base-span']};
    }

    p {
        max-width: 22rem;
        max-height: 7rem;
        font-size: 16px;
        color: ${props => props.theme['base-span']};

        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;

        overflow: hidden;
        text-overflow: ellipsis;
    }
`