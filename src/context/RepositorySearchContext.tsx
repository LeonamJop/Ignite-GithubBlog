import { createContext, ReactNode, useEffect, useState } from "react";
import { repos, user } from "../services/api";
import { RepositoryProps, RepositorySearchProps } from "../@types/interfaces";

export const RepositorySearchContext = createContext({} as RepositorySearchProps);

interface RepositorySearchContextProviderProps {
    children: ReactNode;
}

export function RepositorySearchContextProvider({ children }: RepositorySearchContextProviderProps) {
    const [repositories, setRepositories] = useState(Array<RepositoryProps>);
    const [search, setSearch] = useState('');
    const [quantityRepos, setQuantityRepos] = useState(0);

    useEffect(() => {
        (async () => {
            const publicRepos = await user;
            const response = await repos;

            if (response.data.erro || publicRepos.data.erro) return;

            setQuantityRepos(Number(publicRepos.data.public_repos));
            setRepositories(response.data)
        })();

    },[setQuantityRepos, setRepositories]);

    function handleFilterRepositoriesList() {
        return ('')
    }

    return (
        <RepositorySearchContext.Provider
            value={{
                search,
                setSearch,
                handleFilterRepositoriesList,
                quantityRepos,
                setQuantityRepos,
                repositories,
                setRepositories
            }}
        >
            {children}
        </RepositorySearchContext.Provider>
    )
}