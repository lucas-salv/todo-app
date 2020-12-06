import styled from 'styled-components';

export const LinkComponent = styled.a`
    font-size: 0.7rem;
    font-family: sans-serif;
    margin-top: 5px;
    color: ${props => props.theme.main};
    text-decoration: none;
    transition: color .5s ease-in-out;

    &:active {
        color: ${props => props.theme.grayTextColor};
    }
`;