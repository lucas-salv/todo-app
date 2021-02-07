import { useState, useContext } from 'react';
import { FiLock, FiUser, FiChevronLeft } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import Logo from './../Logo';
import { Form, Label, Title, Button, ErrorModal } from './styles';

import { Link } from 'react-router-dom';
import { Context } from './../../utils/AuthContext';
import errorFunction from './../../utils/errorFunction';
import api from './../../utils/api';

export default function FormCreateAccount() {
    const { handleLogin } = useContext(Context);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [status, setStatus] = useState(false);

    const validateForm = (username, email, pass, confirmPass) => {
        if(!username || username.length < 3) {
            setStatus(true);
            console.log('username');
            return;
        } else if(!email || email.indexOf('@') === -1) {
            setStatus(true);
            console.log('email');
            return;
        } else if(!pass || pass.length < 3) {
            setStatus(true);
            console.log('pass');
            return;
        } else if(pass !== confirmPass){
            setStatus(true);
            console.log('confirmPass')
            return;
        } else {
            const data = {
                name: username,
                email,
                pass
            }
    
            return data;
        }
    }

    const pressEnterLogin = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            document.getElementById('createAccountBtn').click();
        }
    }

    const clickLogin = async (e) => {
        e.preventDefault();
        const data = validateForm(username, email, pass, confirmPass);
        if(data) {
            try{
                await api.post('/signup', data);
                handleLogin(email, pass);
            }catch(err){
                setStatus(errorFunction(err.response.status));
            }
        }
    }

    return (
        <Form>
            <ErrorModal status={status}><p>Ops! Algo deu errado. Mude os valores ou tente novamente!</p></ErrorModal>
            <Link to="/login" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', fontFamily: 'sans-serif', fontSize: '0.8rem', color: '#38A0FF'}}>
                <FiChevronLeft />
                Voltar
            </Link>
            <Logo />
            <Title>Crie sua conta</Title>
            <Label htmlFor="name" status={status}>
                <FiUser color="#9B9B9B" />
                <input type="text" id="name" name="name" autoFocus placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} onFocus={() => {
                    setStatus(false);
                }} onKeyUp={pressEnterLogin}/>
            </Label>
            <Label htmlFor="email" status={status}>
                <HiOutlineMail color="#9B9B9B" />
                <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} onFocus={() => {
                    setStatus(false);
                }} onKeyUp={pressEnterLogin}/>
            </Label>
            <Label htmlFor="pass" status={status}>
                <FiLock color="#9B9B9B" />
                <input type="password" id="pass" name="password" placeholder="Senha" onChange={(e) => setPass(e.target.value)} onFocus={() => {
                    setStatus(false);
                }} onKeyUp={pressEnterLogin}/>
            </Label>
            <Label htmlFor="confirm-pass" status={status}>
                <FiLock color="#9B9B9B" />
                <input type="password" id="confirm-pass" placeholder="Confirmar senha" onChange={(e) => setConfirmPass(e.target.value)} onFocus={() => {
                    setStatus(false);
                }} onKeyUp={pressEnterLogin}/>
            </Label>
            <Button id="createAccountBtn" onClick={clickLogin}>Criar conta</Button>
        </Form>
    )
}