import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.whiteColor};
`;

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
        width: 20px;
        height: 2px;
        background-color: ${props => props.theme.placeholderColor};
        transform: ${props => props.open ? 'rotate(135deg)' : 'rotate(0)'};
        transition: transform .3s ease-in-out;
    }

    &::after {
        content: '';
        position: absolute;
        top: ${props => props.open ? '0' : '5px'};
        width: 20px;
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

export const Perfil = styled.img`
    width:  40px;
    height: 40px;
    margin-left: 20px;
    background-color: ${props => props.theme.main};
    border-radius: 5px;
`