import { useEffect, useState } from "react";
import { CardProfile } from "./CardProfile";
import { CardRepositories } from "./CardRepositories";
import { SearchRepository } from "./SearchRepository";
import { HomeContainer, Profile, RepositoriesList} from "./styles";
import { repos } from "../../services/api";

interface RepositoryProps {
    id: string
    name: string
    created: string
    description: string
}

export function Home() {
    const [repositories, setRepositories] = useState(Array<RepositoryProps>);

    useEffect(() => {

        const fetchData = async () => {
            const response = await repos;

            if (response.data.erro) return;

            setRepositories(response.data);
        }
        
        fetchData();
    },[repos]);

    return (
        <HomeContainer>
            <Profile>
                <CardProfile />
                <SearchRepository />
                <RepositoriesList>
                    {repositories.length > 0 && repositories.map((repository: RepositoryProps)=>{
                        return (
                            <CardRepositories
                                key={repository.id}
                                title={repository.name}
                                created={repository.created}
                                description={repository.description}
                            />
                        )
                    })}
                </RepositoriesList>
            </Profile>
        </HomeContainer>
    )
}