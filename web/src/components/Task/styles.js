import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    margin-bottom: 10px;
    list-style: none;
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
    margin-left: 5px;
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
