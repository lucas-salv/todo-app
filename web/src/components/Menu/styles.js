import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    width: 80%;
    height: 100vh;
    background-color: ${props => props.theme.whiteColor};
    transition: transform .5s ease-in-out;
    transform: translateX(${props => props.open ? 0 : -110}%);
    
    & ~ .backgroundMenu {
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,0.1);
        transition: transform .5s ease-in-out;
        transform: translateX(${props => props.open ? 0 : 110}%);

        @media (min-width: 1200px) {
            display: none;
        }
    }

    @media (min-width: 600px) {
        width: 60%;
    }

    @media (min-width: 900px) {
        width: 40%;
        box-shadow: none;
        transform: translateX(${props => props.open ? 0 : -20}%);
    }

    @media (min-width: 1200px) {
        width: 355px;
        transform: translateX(${props => props.open ? 0 : 0}%);
    }
`;

export const MainMenu = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 100%;
    padding: 60px 0;
    border-right: 1px solid ${props => props.theme.grayBackground};

    @media (min-width: 900px) {
        margin-top: 60px;
        padding-top: 10px;
        border-top: 1px solid ${props => props.theme.grayBackground};
    }

    @media (min-width: 1200px) {
        width: 75px;
    }
`;

export const Item = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: ${props => props.active ? props.theme.main : 'transparent'};
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    .icon {
        fill: ${props => props.active ? props.theme.whiteColor : props.theme.placeholderColor};
    }
`

export const SecondaryMenu = styled.div`
    padding: 40px 10px 10px 10px;
    width:  80%;

    @media (min-width: 900px) {
        margin-top: 60px;
        padding: 10px 20px 10px 20px;
        border-top: 1px solid ${props => props.theme.grayBackground};
        border-right: 1px solid ${props => props.theme.grayBackground};
    }

    @media (min-width: 1200px) {
        width: 300px;
    }
`;