import { Container } from './styles';

export default function DropDownMenu({children, open, position}) {
    return (
        <Container open={open} position={position}>
            {children}
        </Container>
    )
}