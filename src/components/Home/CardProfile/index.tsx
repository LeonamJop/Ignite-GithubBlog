import { ProfileBio, ProfileContainer, ProfileInfo, ProfilePhoto } from "./styles";

import gitimg from '../../../assets/icons/github-brands-solid.svg'
import building from '../../../assets/icons/building-solid.svg'
import group from '../../../assets/icons/user-group-solid.svg'

export function CardProfile() {
    return (
        <ProfileContainer>
            <ProfilePhoto src="https://github.com/LeonamJop.png" />

            <ProfileBio>
                <h2>Leonam Silva</h2>
                <span>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas.
                    Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </span>
                <ProfileInfo>
                    <div>
                        <img src={gitimg} alt="" />
                        <a href="https://github.com/LeonamJop/" target="_blank">LeonamJop</a>
                    </div>

                    <div>
                        <img src={building} alt="" />
                        Tecfan
                    </div>

                    <div>
                        <img src={group} alt="" />
                        14 segudores
                    </div>
                </ProfileInfo>
            </ProfileBio>
        </ProfileContainer>
    )
}