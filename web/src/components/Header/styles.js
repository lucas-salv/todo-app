import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    padding: 25px 10%;
    border-bottom: 1px solid lightgray;
`;

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 25px;
    height: 5px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        width: 25px;
        height: 2px;
        background-color: ${props => props.theme.grayTextColor};
        transform: ${props => props.open ? 'rotate(135deg)' : 'rotate(0)'};
        transition: transform .3s ease-in-out;
    }

    &::after {
        content: '';
        position: absolute;
        top: ${props => props.open ? '0' : '5px'};
        width: 25px;
        height: 2px;
        background-color: ${props => props.theme.grayTextColor};
        transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
        transition: top .3s ease-in-out, transform .3s ease-in-out;
    }
`;

export const PerfilContainer = styled.div``;