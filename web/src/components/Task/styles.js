import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    padding: 0px 10px;
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

    .content-container {
        display: flex;
        padding: 15px 0px;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-left: 10px;

        .task-container {
            display: flex;
            flex-direction: column;

            .title {
                text-decoration: ${props => props.checked ? 'line-through' : 'none' };
                font-size: 0.8rem;
                color: ${props => props.theme.grayTextColor};
            }

            .tagContainer {
                filter: contrast(${props => props.checked ? 0 : 1});
                opacity: ${props => props.checked ? 0.4 : 1};
                display: flex;
                margin-top: 2px;
                z-index: -1;
            }
        }
    }
`;

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
