import { HeaderContainer } from "./styles";

import logoHeader from '../../assets/Cover.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoHeader} alt="" />
        </HeaderContainer>
    )
}