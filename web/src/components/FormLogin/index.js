import { FiLock } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
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
                <HiOutlineMail color="#9B9B9B" />
                <input type="email" id="email" name="email" autoFocus placeholder="Email" />
            </Label>
            <Label htmlFor="pass">
                <FiLock color="#9B9B9B" />
                <input type="password" id="pass" name="password" placeholder="Senha" />
            </Label>
            <Button>Entrar</Button>
            <Link>Criar uma conta</Link>
        </Form>
    )
}