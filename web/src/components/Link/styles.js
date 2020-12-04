import styled from 'styled-components';

export const LinkComponent = styled.a`
    font-size: 0.7rem;
    font-family: sans-serif;
    margin-top: 5px;
    color: #38A0FF;
    transition: color .5s ease-in-out;

    &.active {
        color: #9BCFFF;
    }
`;