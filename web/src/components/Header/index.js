import { useState } from 'react';
import { FiBell } from 'react-icons/fi'
import { HeaderContainer, MenuIcon, PerfilContainer, Perfil } from './styles';

export default function Header() {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const menuAnimation = () => {
        setOpenMenu(!isOpenMenu);
    }

    return (
        <HeaderContainer>
            <MenuIcon onClick={menuAnimation} open={isOpenMenu} />
            <PerfilContainer>
                <FiBell color="#D4D4D4" size={22} />
                <Perfil />
            </PerfilContainer>
        </HeaderContainer>
    )
}