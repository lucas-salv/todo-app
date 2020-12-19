import styled from 'styled-components';

export const Container = styled.ul`
    display: ${props => props.open ? 'block' : 'none'};
    position: absolute;
    top: 60px;
    right: 0;
    width: 200px;
    padding: 10px;
    background-color: ${props => props.theme.whiteColor};
    border: 1px solid ${props => props.theme.grayBackground};
    border-radius: 5px;

    li {
        list-style: none;
        padding: 10px;
        border-bottom: 1px solid ${props => props.theme.grayBackground};
        color: ${props => props.theme.grayTextColor};
        transition: color .5s ease-in-out;
        cursor: pointer;

        &:last-child {
            border-bottom: none;
        }

        &:hover {
            color: ${props => props.theme.main};
        }
    }
`;