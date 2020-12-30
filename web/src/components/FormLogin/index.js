import { useContext, useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
//import Link from './../Link';
import Logo from './../Logo';
import { Form, Label, Title, Button, ErrorModal } from './styles';

import { Context } from './../../utils/AuthContext';
import { Link } from 'react-router-dom';

export default function FormLogin() {
    const {handleLogin, error, setError} = useContext(Context);
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    return (
        <>
        <ErrorModal status={error}><p>E-mail ou senha inválida</p></ErrorModal>
        <Form>
            <Logo />
            <Title>Faça seu login</Title>
            <Label htmlFor="email" status={error}>
                <HiOutlineMail color="#9B9B9B" />
                <input type="email" id="email" name="email" autoFocus placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value);
                }} onFocus={() => setError(false)}/>
            </Label>
            <Label htmlFor="pass" status={error}>
                <FiLock color="#9B9B9B" />
                <input type="password" id="pass" name="password" placeholder="Senha" onChange={(e) => {
                    setPass(e.target.value);
                }} onFocus={() => setError(false)}/>
            </Label>
            <Button onClick={(e) => {
                e.preventDefault();
                handleLogin(email, pass);
            }} >Entrar</Button>
            <Link to="/create-account" style={{ textDecoration: 'none', fontFamily: 'sans-serif', fontSize: '0.8rem', color: '#38A0FF'}}>Criar uma conta</Link>
        </Form>
        </>
    )
}