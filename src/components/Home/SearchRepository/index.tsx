import { InputSearch, PublicationCount, SearchContainer } from "./styles";

export function SearchRepository() {
    return (
        <SearchContainer>
            <PublicationCount>
                <h3>Publicações</h3>
                <span>5 publicações</span>
            </PublicationCount>
            <InputSearch placeholder="Buscar conteúdo"/>
        </SearchContainer>
    )
}