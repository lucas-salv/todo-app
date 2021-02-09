import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
    background-color: ${props => props.theme.background};
`;