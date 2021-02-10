import { useState, useContext, useEffect } from 'react';
import { FiBell } from 'react-icons/fi'
import { HeaderContainer, Container, MenuIcon, PerfilContainer, Perfil } from './styles';
import Progress from './../ProgressBarTask';
import Menu from './../Menu';
import EditUserForm from './../EditUserForm';
import DropDownMenu from './../DropDownMenu';
import { ThemeContext } from 'styled-components';
import { Context } from './../../utils/AuthContext';

export default function Header() {
    const theme = useContext(ThemeContext);
    const { handleLogout, user } = useContext(Context);
    const [isOpenMenu, setOpenMenu] = useState(false);
    const [isDropDown, setDropDown] = useState(false);
    const [isEditUserForm, setEditUserForm] = useState(false);

    useEffect(() => {
        document.addEventListener('click', e => {
            if(e.path.indexOf(document.getElementById('perfil-menu')) < 0) {
                setDropDown(false);
            }
        })
    }, []);

    const menuAnimation = () => {
        setOpenMenu(!isOpenMenu);
    }

    const DropDownAnimation = () => {
        setDropDown(!isDropDown);
    }

    const EditUserFormAnimation = () => {
        setEditUserForm(!isEditUserForm);
    }

    return (
            <HeaderContainer>
                <Menu open={isOpenMenu} setOpen={setOpenMenu} />
                <Container>
                    <MenuIcon onClick={menuAnimation} open={isOpenMenu} />
                    <PerfilContainer>
                        <FiBell className="notify" color={theme.placeholderColor} size={18} />
                        <Perfil id='perfil-menu' src={user.avatar_url} onClick={DropDownAnimation}/>
                        <DropDownMenu open={isDropDown}>
                            <h5>Olá! {user.name}</h5>
                            <li onClick={EditUserFormAnimation}>Editar Usuário</li>
                            <li onClick={handleLogout}>Logout</li>
                        </DropDownMenu>
                        <EditUserForm open={isEditUserForm} setOpen={EditUserFormAnimation}/>
                    </PerfilContainer>
                </Container>
                <Progress />
            </HeaderContainer>
    )
}