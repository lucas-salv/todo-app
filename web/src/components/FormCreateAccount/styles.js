import styled from 'styled-components';

export const Form = styled.div`
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

export const ErrorModal = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 250px;
    padding: 10px;
    color: white;
    background-color: red;
    border-radius: 5px;
    transform: ${props => props.status ? 'translateY(0)' : 'translateY(-100px)'};
    transition: transform .5s;
`

export const Label = styled.label`
    display:flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${props => props.theme.grayBackground};
    border: 1px solid ${props => props.status ? 'red' : props.theme.grayBackground};
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
    margin-bottom: 10px;
`

export const Button = styled.button`
    padding: 10px;
    margin-bottom: 10px;
    color: ${props => props.type === 'delete' ? '#ed2f2f' : '#FFF'};
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