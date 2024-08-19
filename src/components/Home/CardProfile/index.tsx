import { ProfileBio, ProfileContainer, ProfileInfo, ProfilePhoto } from "./styles";

import { useContext } from "react";

import gitimg from '../../../assets/icons/github-brands-solid.svg';
import building from '../../../assets/icons/building-solid.svg';
import group from '../../../assets/icons/user-group-solid.svg';
import link from '../../../assets/icons/arrow-up-right-from-square-solid.svg';
import { RepositorySearchContext } from "../../../context/RepositorySearchContext";

export function CardProfile() {
    const {userName, bio, login, followers, company, url, avatar} = useContext(RepositorySearchContext);

    return (
        <ProfileContainer>
            <ProfilePhoto src={avatar} />

            <ProfileBio>
                <h2>{userName}</h2>
                <span>{bio}</span>
                <ProfileInfo>
                    <div>
                        <a href={url} target="_blank" title="Acessar GITHUB">
                            <img src={gitimg} alt="" />
                            {login}
                            <img src={link} alt="" />
                        </a>
                    </div>

                    <div>
                        <img src={building} alt="" />
                        {company}
                    </div>

                    <div>
                        <img src={group} alt="" />
                        {followers} seguidores
                    </div>
                </ProfileInfo>
            </ProfileBio>
        </ProfileContainer>
    )
}