import { CardProfile } from "./CardProfile";
import { CardRepositories } from "./CardRepositories";
import { SearchRepository } from "./SearchRepository";
import { HomeContainer, Profile, RepositoriesList} from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Profile>
                <CardProfile />
                <SearchRepository />
                <RepositoriesList>
                    <CardRepositories />
                    <CardRepositories />
                    <CardRepositories />
                    <CardRepositories />
                    <CardRepositories />
                </RepositoriesList>
            </Profile>
        </HomeContainer>
    )
}