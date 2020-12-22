import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h4`
    color: ${props => props.theme.textLogoColor};
    margin-bottom: 5px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
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

export const GroupContainer = styled.div`
    margin-top: 10px;
`;

export const Text = styled.p`
    font-size: 0.7rem;
    color: ${props => props.theme.textLogoColor};
    margin-bottom: 5px;
`;