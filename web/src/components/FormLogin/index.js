import { useContext, useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import Link from './../Link';
import Logo from './../Logo';
import { Form, Label, Title, Button } from './styles';

import { Context } from './../../utils/AuthContext';

export default function FormLogin() {
    const {handleLogin} = useContext(Context);
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    return (
        <Form>
            <Logo />
            <Title>Faça seu login</Title>
            <Label htmlFor="email">
                <HiOutlineMail color="#9B9B9B" />
                <input type="email" id="email" name="email" autoFocus placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
            </Label>
            <Label htmlFor="pass">
                <FiLock color="#9B9B9B" />
                <input type="password" id="pass" name="password" placeholder="Senha" onChange={(e) => {
                    setPass(e.target.value);
                }} />
            </Label>
            <Button onClick={(e) => {
                e.preventDefault();
                handleLogin(email, pass);
            }} >Entrar</Button>
            <Link>Criar uma conta</Link>
        </Form>
    )
}