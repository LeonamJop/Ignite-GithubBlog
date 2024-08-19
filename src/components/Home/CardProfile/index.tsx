import { ProfileBio, ProfileContainer, ProfileInfo, ProfilePhoto } from "./styles";

import { useContext } from "react";

import gitimg from '../../../assets/icons/github-brands-solid.svg';
import building from '../../../assets/icons/building-solid.svg';
import group from '../../../assets/icons/user-group-solid.svg';
import link from '../../../assets/icons/arrow-up-right-from-square-solid.svg';
import { RepositorySearchContext } from "../../../context/RepositorySearchContext";

export function CardProfile() {
    const {userInfo} = useContext(RepositorySearchContext);

    return (
        <ProfileContainer>
            <ProfilePhoto src={userInfo.avatar} />

            <ProfileBio>
                <h2>{userInfo.name}</h2>
                <span>{userInfo.bio}</span>
                <ProfileInfo>
                    <div>
                        <a href={userInfo.url} target="_blank" title="Acessar GITHUB">
                            <img src={gitimg} alt="" />
                            {userInfo.login}
                            <img src={link} alt="" />
                        </a>
                    </div>

                    <div>
                        <img src={building} alt="" />
                        {userInfo.company}
                    </div>

                    <div>
                        <img src={group} alt="" />
                        {userInfo.followers} seguidores
                    </div>
                </ProfileInfo>
            </ProfileBio>
        </ProfileContainer>
    )
}