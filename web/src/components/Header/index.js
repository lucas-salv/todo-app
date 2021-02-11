import { useState, useContext, useEffect, useRef } from 'react';
import { FiBell } from 'react-icons/fi'
import { HeaderContainer, Container, MenuIcon, PerfilContainer, Perfil } from './styles';
import Progress from './../ProgressBarTask';
import Menu from './../Menu';
import EditUserForm from './../EditUserForm';
import DropDownMenu from './../DropDownMenu';
import { ThemeContext } from 'styled-components';
import { Context } from './../../utils/AuthContext';

export default function Header() {
    const wrapperRef = useRef(null);
    const theme = useContext(ThemeContext);
    const { handleLogout, user } = useContext(Context);
    const [isOpenMenu, setOpenMenu] = useState(false);
    const [isDropDown, setDropDown] = useState(false);
    const [isEditUserForm, setEditUserForm] = useState(false);

    const handleClickOutside = (e) => {
        if (!wrapperRef.current.contains(e.target)) {
            setDropDown(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    });

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
                        <div ref={wrapperRef}>
                            <Perfil src={user.avatar_url} onClick={DropDownAnimation}/>
                            <DropDownMenu open={isDropDown}>
                                <h5>Olá! {user.name}</h5>
                                <li onClick={EditUserFormAnimation}>Editar Usuário</li>
                                <li onClick={handleLogout}>Logout</li>
                            </DropDownMenu>
                        </div>
                        <EditUserForm open={isEditUserForm} setOpen={EditUserFormAnimation}/>
                    </PerfilContainer>
                </Container>
                <Progress />
            </HeaderContainer>
    )
}