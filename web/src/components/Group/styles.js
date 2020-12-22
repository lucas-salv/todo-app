import styled from 'styled-components';

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-size: 0.9rem;
    padding: 5px;
    background-color: ${props => props.active ? props.theme.secondary : 'transparent'};
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.active ? props.theme.secondary : props.theme.grayBackground};
    }

    .name {
        color: ${props => props.active ? props.theme.whiteColor : props.theme.grayTextColor};
    }

    .float {
        width: 100%;
        position: absolute;
        top: 35px;
        left: 0;
        z-index: 2;
    }

    .edit-button {
        border: none;
        background: none;
        width: 10px;
        height: 25px;
        outline: none;

        .eb-icon {
            color: ${props => props.active ? props.theme.whiteColor : props.theme.grayTextColor};
            cursor: pointer;
        }
    }
`;

export const Label = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    background-color: ${props => props.theme.grayBackground};
    border-radius: 5px;

    input {
        width: 100%;
        padding: 10px;
        color: ${props => props.theme.grayTextColor};
        background: none;
        border: none;
        outline: none;

        &::-webkit-input-placeholder {
            color: ${props => props.theme.placeholderColor};
        }
    }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border: none;
    background-color: ${props => props.theme.main};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
`;