import { useState, useContext, useEffect } from 'react';
import { FiLock, FiUser, FiChevronLeft } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import { Container, Form, Title, Label, ImgContainer, ImgPerfil, ErrorModal, SuccessModal, Button } from './styles';
import Link from './../Link';
import { Context } from './../../utils/AuthContext';
import errorFunction from './../../utils/errorFunction';
import api from './../../utils/api';
import { socket } from './../../utils/socketIo';

const avatars = [
    "http://localhost:4000/todo-app/static/avatars/01.jpg",
    "http://localhost:4000/todo-app/static/avatars/02.jpg",
    "http://localhost:4000/todo-app/static/avatars/03.jpg",
    "http://localhost:4000/todo-app/static/avatars/04.jpg",
    "http://localhost:4000/todo-app/static/avatars/05.jpg",
    "http://localhost:4000/todo-app/static/avatars/06.jpg",
    "http://localhost:4000/todo-app/static/avatars/07.jpg",
    "http://localhost:4000/todo-app/static/avatars/08.jpg"
]

export default function EditUserForm({ open, setOpen }) {
    const { handleLogout, user, setUser } = useContext(Context);
    const [username, setUsername] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [avatar, setAvatar] = useState(user.avatar_url);
    const [status, setStatus] = useState(false);
    const [editStatus, setEditStatus] = useState(false);

    useEffect(() => {
        socket.on('userEdited', content => {
            setUser(content)
        });

        document.addEventListener('click', e => {
            if(e.path.indexOf(document.getElementById('modal')) < 0) {
                setEditStatus(false);
            }
        });
    }, []);

    const validateForm = (username, email, oldPass, newPass, avatar) => {
        if(!username || username.length < 3) {
            setStatus(true);
            console.log('username');
            return;
        } else if(!email || email.indexOf('@') === -1) {
            setStatus(true);
            console.log('email');
            return;
        } else if(!newPass || newPass.length < 3) {
            setStatus(true);
            console.log('pass');
            return;
        } else if(newPass === oldPass){
            setStatus(true);
            console.log('confirmPass')
            return;
        } else {
            const data = {
                name: username,
                email,
                pass: newPass,
                oldPass,
                avatar_url: avatar
            }
    
            return data;
        }
    }

    return (
        <>
            <SuccessModal id="modal" status={editStatus}><p>Editado com sucesso!</p></SuccessModal>
            <Container open={open}>
                <Form>
                    <Link setOpen={setOpen}>
                        <FiChevronLeft />
                        Voltar
                    </Link>
                    <Title>Editar usuário</Title>
                    <ErrorModal status={status}><p>Ops! Algo deu errado. Mude os valores ou tente novamente!</p></ErrorModal>
                    <Label htmlFor="name">
                        <FiUser color="#9B9B9B" />
                        <input type="text" id="name" name="name" autoFocus placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} onFocus={() => {
                    setStatus(false);
                }}/>
                    </Label>
                    <Label htmlFor="email">
                        <HiOutlineMail color="#9B9B9B" />
                        <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => {
                    setStatus(false);
                }}/>
                    </Label>
                    <Label htmlFor="pass">
                        <FiLock color="#9B9B9B" />
                        <input type="password" id="pass" name="password" placeholder="Senha atual" value={oldPass} onChange={(e) => setOldPass(e.target.value)} onFocus={() => {
                    setStatus(false);
                }}/>
                    </Label>
                    <Label htmlFor="confirm-pass">
                        <FiLock color="#9B9B9B" />
                        <input type="password" id="confirm-pass" placeholder="Nova senha" value={newPass} onChange={(e) => setNewPass(e.target.value)} onFocus={() => {
                    setStatus(false);
                }}/>
                    </Label>
                        <ImgContainer>
                            {avatars.map((item, index) => (
                                <ImgPerfil key={index} src={item} check={item === avatar} onClick={() => setAvatar(item)} />
                            ))}
                        </ImgContainer>
                    <Button onClick={ async (e) => {
                        e.preventDefault();
                        const data = validateForm(username, email, oldPass, newPass, avatar);
                        if(data) {
                            try{
                                const res = await api.put(`/user/${user.id}`, data);
                                if(res.status === 200) setEditStatus(true);
                                setOpen();
                                setOldPass('');
                                setNewPass('');
                            }catch(err){
                                setStatus(errorFunction(err.response.status));
                            }
                        } else {
                            return;
                        }
                    }}>Editar</Button>
                    <Button type="delete" onClick={ async () => {
                        await api.delete(`/user/${user.id}`);
                        handleLogout();
                    }}>Excluir conta</Button>
                </Form>
            </Container>
            <div className="backgroundMenu" onClick={() => setOpen()}></div>
        </>
    )
}