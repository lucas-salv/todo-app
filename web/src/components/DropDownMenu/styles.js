import styled from 'styled-components';

export const Container = styled.ul`
    display: ${props => props.open ? 'block' : 'none'};
    position: absolute;
    top: ${props => props.position === 'bottom' ? '40px' : '60px'};
    right: 0;
    width: 200px;
    padding: 10px;
    z-index: 2;
    background-color: ${props => props.theme.grayBackground};
    border: 1px solid ${props => props.theme.placeholderColor};
    border-radius: 5px;

    @media (min-width: 900px) {
        top: ${props => props.position === 'bottom' ? '0' : '60px'};
        right: ${props => props.position === 'bottom' ? '-210px' : '0'};
    }

    li {
        list-style: none;
        padding: 10px;
        border-bottom: 1px solid ${props => props.theme.placeholderColor};
        color: ${props => props.theme.grayTextColor};
        transition: color .5s ease-in-out;
        text-align: left;
        cursor: pointer;

        &:last-child {
            border-bottom: none;
        }

        &:hover {
            color: ${props => props.theme.main};
        }
    }
`;