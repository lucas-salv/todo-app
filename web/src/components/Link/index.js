import { LinkComponent } from './styles';

export default function Link({ children, setOpen }) {
    return (
        <LinkComponent onClick={setOpen}>
            { children }
        </LinkComponent>
    )
}