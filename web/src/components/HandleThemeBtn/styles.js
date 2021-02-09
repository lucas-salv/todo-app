import styled from 'styled-components';

export const Btn = styled.button`
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 50px;
    right: 10%;
    border: none;
    background-color: ${props => props.theme.main};
    border-radius: 50px;
    cursor: pointer;
    outline: none;

    @media (min-width: 900px) {
        right: 10%;
    }

    @media (min-width: 1200px) {
        right: 5%;
    }
`;