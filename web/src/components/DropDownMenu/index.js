import { Container } from './styles';

export default function DropDownMenu({children, open}) {
    return (
        <Container open={open}>
            {children}
        </Container>
    )
}