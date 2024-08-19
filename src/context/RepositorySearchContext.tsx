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
    const [quantityRepos, setQuantityRepos] = useState(0);

    const [userName, setUserName] = useState('');
    const [bio, setBio] = useState('');
    const [login, setLogin] = useState('');
    const [followers, setFollowers] = useState('');
    const [company, setCompany] = useState('');
    const [url, setUrl] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        (async () => {
            const userData = await user;
            const repositories = await repos;

            if (repositories.data.erro || userData.data.erro) return;

            setRepositories(repositories.data);
            setFilteredRepositories(repositories.data);

            setQuantityRepos(Number(userData.data.public_repos));
            setUserName(userData.data.name);
            setBio(userData.data.bio);
            setLogin(userData.data.login);
            setFollowers(userData.data.followers);
            setCompany(userData.data.company);
            setUrl(userData.data.html_url);
            setAvatar(userData.data.avatar_url);
        })();

    },[setQuantityRepos, setRepositories, setUserName, setBio, setLogin, setFollowers, setCompany, setUrl, setAvatar]);

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
                quantityRepos,
                setQuantityRepos,
                repositories: filteredRepositories,
                setRepositories,
                userName,
                setUserName,
                bio,
                setBio,
                login,
                setLogin,
                followers,
                setFollowers,
                company,
                setCompany,
                url,
                setUrl,
                avatar,
                setAvatar
            }}
        >
            {children}
        </RepositorySearchContext.Provider>
    )
}