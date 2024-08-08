import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 0.75rem;

    margin-top: 4.5rem;
`
export const PublicationCount = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        color: ${props => props.theme['base-span']};
    }
`

export const InputSearch = styled.input`
    width: 100%;
    height: 3.125rem;

    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;

    background: ${props => props.theme['base-input']};

    padding: 0.75rem 1rem;

    &:focus {
        color: ${props => props.theme['base-text']};
        outline: 1px solid ${props => props.theme['blue']};
    }

    &::placeholder {
        color: ${props => props.theme['base-label']};
    }
`