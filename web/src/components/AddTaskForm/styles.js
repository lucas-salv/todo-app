import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.div`
    display: flex;
    background-color: ${props => props.theme.grayBackground};
    border-radius: 5px;

    input {
        width: 100%;
        margin-left: 10px;
        padding: 10px;
        color: ${props => props.theme.grayTextColor};
        background: none;
        border: none;
        outline: none;

        &::-webkit-input-placeholder {
            color: ${props => props.theme.placeholderColor};
        }
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${props => props.theme.textLogoColor};
`;

export const Button = styled.button`
    padding: 10px 15px;
    background-color: ${props => props.theme.main};
    border: none;
    outline: none;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
    transition: .5s ease-in-out;

    &:active {
        background-color: ${props => props.theme.grayTextColor};
    }
`;