import styled from 'styled-components';

export const Container = styled.div`
    padding: 100px 0;

    h3 {
        padding: 0 10%;
        text-align: center;
        color: ${props => props.theme.placeholderColor};
    }
`;

export const TaskContainer = styled.ul`
    margin-top: 20px;
`;

export const MainContainer = styled.main`
    padding: 0 10%;

    @media (min-width: 900px) {
        margin-left: 32%;
        padding: 0 10%;
    }

    @media (min-width: 1200px) {
        margin-left: 355px;
        padding: 0 5%;
    }
`

export const Title = styled.h4`
    color: ${props => props.theme.grayTextColor};
    font-weight: normal;
    font-size: 0.7rem;
    margin-bottom: 10px;
`