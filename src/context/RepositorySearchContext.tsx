import { createContext, ReactNode, useEffect, useState } from "react";
import { repos, user } from "../services/api";
import { RepositoryProps, RepositorySearchProps } from "../@types/interfaces";

export const RepositorySearchContext = createContext({} as RepositorySearchProps);

interface RepositorySearchContextProviderProps {
    children: ReactNode;
}

export function RepositorySearchContextProvider({ children }: RepositorySearchContextProviderProps) {
    const [repositories, setRepositories] = useState(Array<RepositoryProps>);
    const [filteredRepositories, setFilteredRepositories] = useState(Array<RepositoryProps>);
    const [search, setSearch] = useState('');

    const [userInfo, setUserInfo] = useState({
        name: '',
        bio: '',
        login: '',
        followers: '',
        company: '',
        url: '',
        avatar: '',
        quantityRepos: 0
    });

    useEffect(() => {
        (async () => {
            const userData = await user;
            const repositories = await repos;

            if (repositories.data.erro || userData.data.erro) return;

            setRepositories(repositories.data);
            setFilteredRepositories(repositories.data);

            setUserInfo({
                name: userData.data.name,
                bio: userData.data.bio,
                login: userData.data.login,
                followers: userData.data.followers,
                company: userData.data.company,
                url: userData.data.html_url,
                avatar: userData.data.avatar_url,
                quantityRepos: Number(userData.data.public_repos)
            });

        })();

    },[setRepositories]);

    useEffect(() => {
        if (search !== '') {
            const filterSearch = repositories.filter(function (repo) {
                return (
                    repo.name.toLowerCase().includes(search.toLowerCase())
                )
            });
    
            setFilteredRepositories(filterSearch);
        } else {
            setFilteredRepositories(repositories);
        }
        
    },[repositories, search]);

    return (
        <RepositorySearchContext.Provider
            value={{
                search,
                setSearch,
                repositories: filteredRepositories,
                setRepositories,
                userInfo
            }}
        >
            {children}
        </RepositorySearchContext.Provider>
    )
}