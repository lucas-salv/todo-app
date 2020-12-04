import styled from 'styled-components';

export const ButtonComponent = styled.button`
    padding: 10px;
    color: #FFF;
    background-color: #38A0FF;
    border-radius: 5px;
    border: 1px solid #38A0FF;
    transition: all .5s ease-in-out;

    &:active {
        border: 1px solid #9B9B9B;
        color: #9B9B9B;
        background-color: #FFF;
    }
`;