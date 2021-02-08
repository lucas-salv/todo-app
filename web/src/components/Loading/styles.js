import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Container = styled.div`
    width: 30px;
    height: 30px;
    border: 4px solid ${props => props.theme.grayBackground};
    border-bottom-color: ${props => props.theme.main}; 
    border-radius: 30px;
    animation: ${rotate} 1s linear infinite;
`;