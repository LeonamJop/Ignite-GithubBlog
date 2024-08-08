import { ProfileBio, ProfileContainer, ProfileInfo, ProfilePhoto } from "./styles";
import { user } from '../../../services/api'

import { useEffect, useState } from "react";

import gitimg from '../../../assets/icons/github-brands-solid.svg'
import building from '../../../assets/icons/building-solid.svg'
import group from '../../../assets/icons/user-group-solid.svg'

export function CardProfile() {
    const [userName, setUserName] = useState('')
    const [bio, setBio] = useState('')
    const [login, setLogin] = useState('')
    const [followers, setFollowers] = useState('')
    const [company, setCompany] = useState('')
    const [url, setUrl] = useState('')
    const [avatar, setAvatar] = useState('')

    useEffect(() => {

        const fetchData = async () => {
            const response = await user

            if (response.data.erro) return;

            setUserName(response.data.name)
            setBio(response.data.bio)
            setLogin(response.data.login)
            setFollowers(response.data.followers)
            setCompany(response.data.company)
            setUrl(response.data.html_url)
            setAvatar(response.data.avatar_url)
        }

        fetchData()
    },[])

    return (
        <ProfileContainer>
            <ProfilePhoto src={avatar} />

            <ProfileBio>
                <h2>{userName}</h2>
                <span>{bio}</span>
                <ProfileInfo>
                    <div>
                        <img src={gitimg} alt="" />
                        <a href={url} target="_blank">{login}</a>
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