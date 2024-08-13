import { useEffect, useState } from "react";
import { InputSearch, PublicationCount, SearchContainer } from "./styles";
import { user } from "../../../services/api";

export function SearchRepository() {
    const [repos, setRepos] = useState(0);

    useEffect(() => {

        const fetchData = async () => {
            const response = await user;

            if (response.data.erro) return;

            setRepos(response.data.public_repos);
        }

        fetchData();
    },[user]);

    return (
        <SearchContainer>
            <PublicationCount>
                <h3>Publicações</h3>
                <span>{repos} publicações</span>
            </PublicationCount>
            <InputSearch placeholder="Buscar conteúdo"/>
        </SearchContainer>
    )
}