import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 10px 10%;
`;

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    left: 10%;
    width: 25px;
    height: 5px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        width: 25px;
        height: 2px;
        background-color: ${props => props.theme.placeholderColor};
        transform: ${props => props.open ? 'rotate(135deg)' : 'rotate(0)'};
        transition: transform .3s ease-in-out;
    }

    &::after {
        content: '';
        position: absolute;
        top: ${props => props.open ? '0' : '5px'};
        width: 25px;
        height: 2px;
        background-color: ${props => props.theme.placeholderColor};
        transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
        transition: top .3s ease-in-out, transform .3s ease-in-out;
    }
`;

export const PerfilContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Perfil = styled.div`
    width:  40px;
    height: 40px;
    margin-left: 20px;
    background-color: ${props => props.theme.main};
    border-radius: 5px;
`