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
    
    handleFilterRepositoriesList(item: string): string;
    
    quantityRepos: number;
    setQuantityRepos: Dispatch<SetStateAction<number>>;

    repositories: Array<RepositoryProps>;
    setRepositories: Dispatch<SetStateAction<Array<RepositoryProps>>>
}