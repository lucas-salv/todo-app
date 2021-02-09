import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100vh;
    padding: 20px;
    background-color: ${props => props.theme.whiteColor};
    z-index: 3;
    transition: transform .5s ease-in-out;
    transform: translateX(${props => props.open ? 0 : 110}%);

    & ~ .backgroundMenu {
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,0.1);
        transition: transform .5s ease-in-out;
        transition: transform .5s ease-in-out;
        transform: translateX(${props => props.open ? 0 : -110}%);
    }

    @media (min-width: 600px) {
        width: 60%;
    }

    @media (min-width: 900px) {
        width: 40%;
    }

    @media (min-width: 1200px) {
        width: 355px;
    }
`

export const Form = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    transition: width 0.5s ease-in-out;
`;

export const Label = styled.label`
    display:flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${props => props.theme.grayBackground};
    border: 1px solid ${props => props.status ? 'red' : props.theme.grayBackground};
    border-radius: 5px;
    transition: border-color .2s ease-in-out;

    input {
        width: 100%;
        margin-left: 10px;
        color: ${props => props.theme.grayTextColor};
        background: none;
        border: none;
        outline: none;

        &::-webkit-input-placeholder {
            color: ${props => props.theme.placeholderColor};
        }
    }
`;

export const Title = styled.h2`
    font-size: 0.8rem;
    color: ${props => props.theme.grayTextColor};
    font-weight: normal;
    margin: 20px 0 10px 0;
`

export const ImgContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 10px;
`

export const ImgPerfil = styled.img`
    width: 40px;
    height: 40px;
    margin: 2.5px;
    background-color: ${props =>  props.theme.main};
    border-radius: 5px;
    opacity: ${props => props.check ? '50%' : '100%'};
    cursor: pointer;

    &:hover {
        opacity: 50%;
    }
`

export const ErrorModal = styled.div`
    display: flex;
    justify-content: center;
    opacity: ${props => props.status ? 1 : 0};
    max-height: ${props => props.status ? '200px' : '0px'};
    width: 100%;
    padding: ${props => props.status ? '10px' : '0px'};
    margin-bottom: ${props => props.status ? '10px' : '0px'};
    color: white;
    background-color: red;
    border-radius: 5px;
    transition: opacity .5s ease-in-out, padding .2s ease-in-out .4s, margin-bottom .2s ease-in-out .4s, max-height .2s ease-in-out .4s;
    overflow: hidden;
`

export const SuccessModal = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 60px;
    right: 0px;
    width: 250px;
    padding: 10px;
    color: white;
    background-color: green;
    border-radius: 5px;
    transform: ${props => props.status ? 'translateY(0)' : 'translateY(-200px)'};
    transition: transform .5s;
`

export const Button = styled.button`
    padding: 10px;
    margin-bottom: 10px;
    color: ${props => props.type === 'delete' ? '#ed2f2f' : props.theme.whiteColor};
    font-weight: bold;
    outline: none;
    background-color: ${props => props.type === 'delete' ? props.theme.whiteColor : props.theme.main};
    border-radius: 5px;
    border: 1px solid ${props => props.type === 'delete' ? 'transparent' : props.theme.main};
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:active {
        border: 1px solid ${props => props.theme.grayTextColor};
        color: ${props => props.theme.grayTextColor};
        background-color: ${props => props.theme.whiteColor};
    }

`;