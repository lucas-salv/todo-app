import styled from 'styled-components';

export const LogoComponent = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
`;

export const TitleLogo = styled.h1`
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0 15px 0;
    color: ${props => props.theme.textLogoColor};
`;