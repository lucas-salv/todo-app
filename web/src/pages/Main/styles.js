import styled from 'styled-components';

export const Container = styled.div`
    padding: 100px 10% 0 10%;
`;

export const TaskContainer = styled.ul`
    margin-top: 20px;
`

export const Title = styled.h4`
    color: ${props => props.theme.grayTextColor};
    font-size: 0.8rem;
`