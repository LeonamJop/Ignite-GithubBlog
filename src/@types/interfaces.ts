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

export interface UserInfoProps {
    name: string
    bio: string
    login: string
    followers: string
    company: string
    url: string
    avatar: string
    quantityRepos: number
}

export interface RepositorySearchProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;

    repositories: Array<RepositoryProps>;
    setRepositories: Dispatch<SetStateAction<Array<RepositoryProps>>>

    userInfo: UserInfoProps;
}