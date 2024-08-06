import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 54rem;
    height: 13.25rem;

    background-color: ${props => props.theme['base-profile']};

    display: inline-flex;
    justify-content: center;
    align-items: center;

    gap: 2rem;

    border-radius: 10px;

    margin-top: -85px;

    h2 {
        size: 20px;
        color: ${props => props.theme['base-title']};
    }

    span {
        max-width: 38.25rem;
        max-height: 3.25rem;
        size: 16px;
        color: ${props => props.theme['base-span']};
    }
`

export const ProfilePhoto = styled.img`
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
`

export const ProfileBio = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const ProfileInfo = styled.div`
    max-width: 24.563rem;
    max-height: 1.625rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-direction: row;

    margin-top: 1.5rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 0.535rem;
    }

    img {
        width: 1rem;
        height: 1rem;
    }
`