import styled from 'styled-components';

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    padding: 10px;
    border-left: 2px solid ${props => props.active ? props.theme.main: 'transparent'};
    cursor: pointer;

    div {
        width: 100%;
    }

    &:hover {
        border-left: 2px solid ${props => props.active ? props.theme.main: 'transparent'};
    }

    .name {
        color: ${props => props.active ? props.theme.grayTextColor : props.theme.placeholderColor};
    }

    .edit-button {
        position: relative;
        border: none;
        background: none;
        width: 10px;
        height: 20px;
        outline: none;

        .eb-icon {
            color: ${props => props.active ? props.theme.grayTextColor : props.theme.placeholderColor};
            cursor: pointer;
        }
    }
`;

export const EditGroupContainer = styled.div`
    display: ${props => props.open ? `flex` : `none`};
    flex-direction:  column;
    position: absolute;
    padding: 40px 10px 50px 10px;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: ${props => props.theme.background};

    p {
        color: ${props => props.theme.grayTextColor};
        margin: 20px 0 10px 0;
        font-size: 0.8rem;
    }
`;

export const Label = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: ${props => props.theme.grayBackground};
    border-radius: 5px;

    input {
        width: 100%;
        margin-left: 10px;
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
    padding: 10px;
    border: none;
    color: #FFF;
    background-color: ${props => props.theme.main};
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
`;