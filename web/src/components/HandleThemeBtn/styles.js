import styled from 'styled-components';

export const Btn = styled.button`
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 50px;
    right: 10%;
    border: none;
    background-color: ${props => props.theme.main};
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    @media (min-width: 900px) {
        right: 10%;
    }

    @media (min-width: 1200px) {
        right: 5%;
    }
`;