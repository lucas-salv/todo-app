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
    position: relative;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 10%;
`;

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    left: ${props => props.open ? 5.5 : 10}%;
    z-index: 2;
    width: 25px;
    height: 5px;
    cursor: pointer;
    outline: none;
    transition: left .5s ease-in-out;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        width: 20px;
        height: 2px;
        background-color: ${props => props.theme.placeholderColor};
        transform: ${props => props.open ? 'rotate(-315deg)' : 'rotate(0)'};
        transition: transform .5s ease-in-out;
    }

    &::after {
        content: '';
        position: absolute;
        top: ${props => props.open ? '0' : '5px'};
        width: 20px;
        height: 2px;
        background-color: ${props => props.theme.placeholderColor};
        transform: ${props => props.open ? 'rotate(-225deg)' : 'rotate(0)'};
        transition: top .5s ease-in-out, transform .5s ease-in-out;
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