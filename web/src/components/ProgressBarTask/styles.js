import styled from 'styled-components';

export const Progress = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 4px;
    background-color: ${props => props.theme.grayBackground};

    @media (min-width: 900px) {
        width: 68%;
        margin-left: 32%;
        align-self: flex-end;
    }

    @media (min-width: 1200px) {
        width: calc(100% - 355px);
    }
`;

export const Bar = styled.div`
    width: calc(${props => props.percent}% - 31.22px);
    height: 100%;
    background-color: ${props => props.theme.main};
    transition: width .4s ease-in-out;
`;

export const Percent = styled.span`
    font-size: 0.6rem;
    padding: 0 5px;
    color: ${props => props.theme.placeholderColor};
    background-color: ${props => props.theme.whiteColor};
`;