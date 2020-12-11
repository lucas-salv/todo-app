import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    padding: 15px 10px;
    list-style: none;
    border-bottom: 1px solid ${props => props.theme.grayBackground};
    cursor: pointer;
    transition: background-color .5s ease-in-out;

    &:last-child {
        border-bottom: none;
    }

    &:active, &:hover {
        background-color: ${props => props.theme.grayBackground};
    }
`;

export const TitleTask = styled.p`
    font-size: 0.8rem;
    color: ${props => props.theme.grayTextColor};
`

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 10px;
`

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TagContainer = styled.div`
    display: flex;
    margin-top: 2px;
`

export const Tag = styled.div`
   width: 15px;
   height: 3px;
   background-color: ${props => props.color};
   margin-right: 3px;
`;

export const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;

    .trashIcon  {
        color: ${props =>  props.theme.grayTextColor};
        transition: color .5s ease-in-out;
    }

    &:hover .trashIcon {
        color: #ed2f2f;
    }
`
