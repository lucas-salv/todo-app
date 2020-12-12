import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    width: 80%;
    height: 100vh;
    background-color: ${props => props.theme.whiteColor};
    transition: transform .5s ease-in-out;
    transform: translateX(${props => props.open ? 0 : -100}%);
`;

export const MainMenu = styled.nav`
    width: 20%;
    height: 100%;
    border-right: 1px solid ${props => props.theme.grayBackground};
`;

export const SecondaryMenu = styled.div``;