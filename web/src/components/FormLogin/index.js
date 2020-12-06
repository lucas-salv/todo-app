import { FiUser, FiLock } from 'react-icons/fi'
import Button from './../Button';
import Link from './../Link';
import Logo from './../Logo';
import { Form, Label, Title } from './styles';

export default function FormLogin() {
    return (
        <Form action="#">
            <Logo />
            <Title>Faça seu login</Title>
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