import styled from 'styled-components';

export const ButtonComponent = styled.button`
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