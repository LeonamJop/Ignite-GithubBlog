import styled from "styled-components";

export const HomeContainer = styled.div`
    max-width: 85.375rem;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const Profile = styled.main`
    width: 54rem;

    display: flex;
    flex-direction: column;

`

export const RepositoriesList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    margin-top: 3rem;
    margin-bottom: 10rem;
`