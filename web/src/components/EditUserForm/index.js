import { useState, useContext, useEffect, useRef } from 'react';
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
    const wrapperRef = useRef(null);
    const { handleLogout, user, setUser } = useContext(Context);
    const [username, setUsername] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [avatar, setAvatar] = useState(user.avatar_url);
    const [status, setStatus] = useState(false);
    const [editStatus, setEditStatus] = useState(false);

    const handleClickOutside = (e) => {
        if (!wrapperRef.current.contains(e.target)) {
            setEditStatus(false);
        }
    }

    useEffect(() => {
        socket.on('userEdited', content => {
            setUser(content)
        });
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    });

    const validateForm = (username, email, oldPass, newPass, avatar) => {
        if(username.length > 0 && username.length < 3) {
            setStatus(true);
            return;
        } else if(email.indexOf('@') === -1) {
            setStatus(true);
            return;
        } else if(newPass.length > 0 && newPass.length < 3) {
            setStatus(true);
            return;
        } else if(newPass === oldPass && newPass !== ''){
            setStatus(true);
            return;
        } else {
            const data = {
                name: username.length === 0 ? undefined : username,
                email: email.length === 0 ? undefined : email,
                pass: newPass.length === 0 ? undefined : newPass,
                oldPass,
                avatar_url: avatar
            }
    
            return data;
        }
    }

    const clickEditUser = async (e) => {
        e.preventDefault();
        const data = validateForm(username, email, oldPass, newPass, avatar);
        if(data) {
            try{
                const res = await api.put(`/user`, data);
                if(res.status === 200) setEditStatus(true);
                setOpen();
                setOldPass('');
                setNewPass('');
            }catch(err){
                setStatus(errorFunction(err.response.status));
            }
        }
    }

    const pressEnterEditUser = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            document.getElementById('editUserBtn').click();
        }
    }

    return (
        <>
            <SuccessModal ref={wrapperRef} status={editStatus}><p>Usuário editado com sucesso!</p></SuccessModal>
            <Container open={open}>
                <Form>
                    <Link setOpen={setOpen}>
                        <FiChevronLeft />
                        Voltar
                    </Link>
                    <Title>Editar usuário</Title>
                    <ErrorModal status={status}><p>Ops! Algo deu errado. Mude os valores ou tente novamente!</p></ErrorModal>
                    <Label htmlFor="name" status={status}>
                        <FiUser color="#9B9B9B" />
                        <input type="text" id="name" name="name" autoFocus placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} onFocus={() => {
                    setStatus(false);
                }} onKeyUp={pressEnterEditUser} />
                    </Label>
                    <Label htmlFor="email" status={status}>
                        <HiOutlineMail color="#9B9B9B" />
                        <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => {
                    setStatus(false);
                }} onKeyUp={pressEnterEditUser}/>
                    </Label>
                    <Label htmlFor="pass" status={status}>
                        <FiLock color="#9B9B9B" />
                        <input type="password" id="pass" name="password" placeholder="Senha atual" value={oldPass} onChange={(e) => setOldPass(e.target.value)} onFocus={() => {
                    setStatus(false);
                }} onKeyUp={pressEnterEditUser}/>
                    </Label>
                    <Label htmlFor="confirm-pass" status={status}>
                        <FiLock color="#9B9B9B" />
                        <input type="password" id="confirm-pass" placeholder="Nova senha" value={newPass} onChange={(e) => setNewPass(e.target.value)} onFocus={() => {
                    setStatus(false);
                }} onKeyUp={pressEnterEditUser}/>
                    </Label>
                        <ImgContainer>
                            {avatars.map((item, index) => (
                                <ImgPerfil key={index} src={item} check={item === avatar} onClick={() => setAvatar(item)} />
                            ))}
                        </ImgContainer>
                    <Button id="editUserBtn" onClick={clickEditUser}>Editar</Button>
                    <Button type="delete" onClick={ async () => {
                        await api.delete(`/user`);
                        handleLogout();
                    }}>Excluir conta</Button>
                </Form>
            </Container>
            <div className="backgroundMenu" onClick={() => setOpen()}></div>
        </>
    )
}