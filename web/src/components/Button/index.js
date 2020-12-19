import { ButtonComponent } from './styles';

export default function Button({ children, type}) {
    return (
        <ButtonComponent type={type}>
            {children}
        </ButtonComponent>
    )
}