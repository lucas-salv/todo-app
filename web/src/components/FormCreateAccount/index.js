import { FiLock, FiUser, FiChevronLeft } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import Button from './../Button';
import Logo from './../Logo';
import { Form, Label, Title } from './styles';

import { Link } from 'react-router-dom';

export default function FormCreateAccount() {
    return (
        <Form action="#">
            <Link to="/login" style={{ textDecoration: 'none', fontFamily: 'sans-serif', fontSize: '0.8rem', color: '#38A0FF'}}>
                <FiChevronLeft />
                Voltar
            </Link>
            <Logo />
            <Title>Crie sua conta</Title>
            <Label htmlFor="name">
                <FiUser color="#9B9B9B" />
                <input type="text" id="name" name="name" autoFocus placeholder="Usuário" />
            </Label>
            <Label htmlFor="email">
                <HiOutlineMail color="#9B9B9B" />
                <input type="email" id="email" name="email" placeholder="Email" />
            </Label>
            <Label htmlFor="pass">
                <FiLock color="#9B9B9B" />
                <input type="password" id="pass" name="password" placeholder="Senha" />
            </Label>
            <Label htmlFor="confirm-pass">
                <FiLock color="#9B9B9B" />
                <input type="password" id="confirm-pass" placeholder="Confirmar senha"/>
            </Label>
            <Button>Criar conta</Button>
        </Form>
    )
}