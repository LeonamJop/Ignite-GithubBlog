import { searchRepositoryProps } from "../../../@types/interfaces";
import { InputSearch, PublicationCount, SearchContainer } from "./styles";

export function SearchRepository({ quantityRepos }: searchRepositoryProps) {
    return (
        <SearchContainer>
            <PublicationCount>
                <h3>Publicações</h3>
                <span>{quantityRepos} publicações</span>
            </PublicationCount>
            <InputSearch placeholder="Buscar conteúdo"/>
        </SearchContainer>
    )
}