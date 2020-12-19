import { useState } from 'react';
import { FiBell } from 'react-icons/fi'
import { HeaderContainer, Container, MenuIcon, PerfilContainer, Perfil } from './styles';
import Progress from './../ProgressBarTask';
import Menu from './../Menu';
import EditUserForm from './../EditUserForm';

export default function Header() {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const [isEditUserForm, setEditUserForm] = useState(false);

    const menuAnimation = () => {
        setOpenMenu(!isOpenMenu);
    }

    const EditUserFormAnimation = () => {
        setEditUserForm(!isEditUserForm);
    }

    console.log(isEditUserForm);

    return (
        <HeaderContainer>
            <Menu open={isOpenMenu} />
            <Container>
                <MenuIcon onClick={menuAnimation} open={isOpenMenu} />
                <PerfilContainer>
                    <FiBell className="notify" color="#D4D4D4" size={22} />
                    <Perfil onClick={EditUserFormAnimation}/>
                    <EditUserForm open={isEditUserForm} setOpen={EditUserFormAnimation}/>
                </PerfilContainer>
            </Container>
            <Progress />
        </HeaderContainer>
    )
}