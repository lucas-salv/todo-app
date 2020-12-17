import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100vh;
    padding: 20px;
    background-color: ${props => props.theme.whiteColor};
    z-index: 2;

    & ~ .backgroundMenu {
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,0.1);
        transition: transform .5s ease-in-out;
        //transform: translateX(${props => props.open ? 0 : 110}%);
        transform: translateX(0%)
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    width: 100%;
    transition: width 0.5s ease-in-out;

    @media (min-width: 600px){
        width: 70%;
    }

    @media (min-width: 900px){
        width: 50%;
    }

    @media (min-width: 1200px){
        width: 40%;
    }

    @media (min-width: 1800px){
        width: 25%;
    }
`;

export const Label = styled.label`
    display:flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${props => props.theme.grayBackground};
    border: 1px solid ${props => props.theme.grayBackground};
    border-radius: 5px;

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
    background-color: ${props => props.theme.grayBackground};
`

export const ImgPerfil = styled.img`
    width: 40px;
    height: 40px;
    margin: 2.5px;
    background-color: ${props =>  props.theme.main};
    border-radius: 5px;
    cursor: pointer;
`