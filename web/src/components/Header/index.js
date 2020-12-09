import {useState} from 'react';
import { HeaderContainer, MenuIcon, PerfilContainer } from './styles';

export default function Header() {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const menuAnimation = () => {
        setOpenMenu(!isOpenMenu);
    }

    return (
        <HeaderContainer>
            <MenuIcon onClick={menuAnimation} open={isOpenMenu} />
            <PerfilContainer />
        </HeaderContainer>
    )
}