import { FiUser, FiLock } from 'react-icons/fi'
import Button from './../Button';
import Link from './../Link';
import { Form, Label } from './styles';

export default function FormLogin() {
    return (
        <Form action="#">
            <Label htmlFor="email">
                <FiUser color="#9B9B9B" />
                <input type="text" id="email" name="email" autoFocus />
            </Label>
            <Label htmlFor="pass">
                <FiLock color="#9B9B9B" />
                <input type="password" id="pass" name="password" />
            </Label>
            <Button>Entrar</Button>
            <Link>Criar uma conta</Link>
        </Form>
    )
}