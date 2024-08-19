import { Dispatch, SetStateAction } from "react"

export interface RepositoryProps {
    id: string
    name: string
    created_at: string
    description: string
}

export interface searchRepositoryProps {
    quantityRepos: number
}

export interface CardRepositoriesProps {
    title: string
    created: string
    description: string
}

export interface RepositorySearchProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
        
    quantityRepos: number;
    setQuantityRepos: Dispatch<SetStateAction<number>>;

    repositories: Array<RepositoryProps>;
    setRepositories: Dispatch<SetStateAction<Array<RepositoryProps>>>

    userName: string;
    setUserName: Dispatch<SetStateAction<string>>;

    bio: string
    setBio: Dispatch<SetStateAction<string>>;

    login: string;
    setLogin: Dispatch<SetStateAction<string>>;

    followers: string;
    setFollowers: Dispatch<SetStateAction<string>>;

    company: string;
    setCompany: Dispatch<SetStateAction<string>>;

    url: string;
    setUrl: Dispatch<SetStateAction<string>>;

    avatar: string;
    setAvatar: Dispatch<SetStateAction<string>>;
}