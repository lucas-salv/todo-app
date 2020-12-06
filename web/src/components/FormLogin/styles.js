import styled from 'styled-components';

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.label`
    display:flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${props => props.theme.grayBackground};
    border-radius: 5px;

    input {
        width: 100%;
        margin-left: 5px;
        color: ${props => props.theme.grayTextColor};
        background: none;
        border: none;
        outline: none;
    }
`;

export const Title = styled.h2`
    font-size: 0.8rem;
    color: ${props => props.theme.grayTextColor};
    font-weight: normal;
    margin-bottom: 10px;
`