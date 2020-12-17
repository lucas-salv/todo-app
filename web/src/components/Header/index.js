import { useState } from 'react';
import { FiBell } from 'react-icons/fi'
import { HeaderContainer, Container, MenuIcon, PerfilContainer, Perfil } from './styles';
import Progress from './../ProgressBarTask';
import Menu from './../Menu';

export default function Header() {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const menuAnimation = () => {
        setOpenMenu(!isOpenMenu);
    }

    return (
        <HeaderContainer>
            <Menu open={isOpenMenu} />
            <Container>
                <MenuIcon onClick={menuAnimation} open={isOpenMenu} />
                <PerfilContainer>
                    <FiBell className="notify" color="#D4D4D4" size={22} />
                    <Perfil />
                </PerfilContainer>
            </Container>
            <Progress />
        </HeaderContainer>
    )
}