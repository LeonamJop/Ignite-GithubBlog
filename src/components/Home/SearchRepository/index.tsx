import { SetStateAction, useContext } from "react";
import { searchRepositoryProps } from "../../../@types/interfaces";
import { InputSearch, PublicationCount, SearchContainer } from "./styles";
import { RepositorySearchContext } from "../../../context/RepositorySearchContext";

export function SearchRepository({ quantityRepos }: searchRepositoryProps) {
    const { search, setSearch } = useContext(RepositorySearchContext);

    return (
        <SearchContainer>
            <PublicationCount>
                <h3>Publicações</h3>
                <span>{quantityRepos} publicações</span>
            </PublicationCount>
            <InputSearch
                placeholder="Buscar conteúdo"
                value={search} 
                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setSearch(event.target.value)}
            />
        </SearchContainer>
    )
}