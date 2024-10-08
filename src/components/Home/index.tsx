import { useContext } from "react";
import { CardProfile } from "./CardProfile";
import { CardRepositories } from "./CardRepositories";
import { SearchRepository } from "./SearchRepository";
import { HomeContainer, Profile, RepositoriesList} from "./styles";
import { RepositorySearchContext } from "../../context/RepositorySearchContext";
import { RepositoryProps } from "../../@types/interfaces";

export function Home() {
    const {search, repositories, userInfo } = useContext(RepositorySearchContext);

    return (
        <HomeContainer>
            <Profile>
                <CardProfile />
                <SearchRepository quantityRepos={search === '' ? userInfo.quantityRepos : repositories.length} />
                <RepositoriesList>
                    {repositories.length > 0 && repositories.map((repository: RepositoryProps)=>{
                        return (
                            <CardRepositories
                                key={repository.id}
                                title={repository.name}
                                created={repository.created_at}
                                description={repository.description}
                            />
                        )
                    })}
                </RepositoriesList>
            </Profile>
        </HomeContainer>
    )
}