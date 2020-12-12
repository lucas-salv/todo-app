import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h4`
    color: ${props => props.theme.textLogoColor};
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: none;
    background-color: ${props => props.theme.main};
    border-radius: 5px;
`;

export const GroupContainer = styled.div`
    margin-top: 10px;
`;

export const Text = styled.p`
    font-size: 0.6rem;
    color: ${props => props.theme.textLogoColor};
    margin-bottom: 5px;
`;

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    padding: 5px;
    background-color: ${props => props.active ? props.theme.secondary : 'transparent'};
    border-radius: 5px;
    cursor: pointer;

    .name {
        color: ${props => props.active ? props.theme.whiteColor : props.theme.grayTextColor};
    }

    .edit-button {
        border: none;
        background: none;
        width: 10px;
        height: 25px;

        .eb-icon {
            color: ${props => props.active ? props.theme.whiteColor : props.theme.grayTextColor};
        }
    }
`;