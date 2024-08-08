import { CardProfile } from "./CardProfile";
import { CardRepositories } from "./CardRepositories";
import { HomeContainer, Profile, RepositoriesList} from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Profile>
                <CardProfile />
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