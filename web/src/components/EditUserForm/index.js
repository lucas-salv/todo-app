import { useState, useContext } from 'react';
import { FiLock, FiUser, FiChevronLeft } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import { Container, Form, Title, Label, ImgContainer, ImgPerfil } from './styles';
import Button from './../Button';
import Link from './../Link';
import { Context } from './../../utils/AuthContext';

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
    const { user } = useContext(Context);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [oldPass, setOldPass] = useState();
    const [newPass, setNewPass] = useState();

    return (
        <>
            <Container open={open}>
                <Form action="#">
                    <Link setOpen={setOpen}>
                        <FiChevronLeft />
                        Voltar
                    </Link>
                    <Title>Editar usuário</Title>
                    <Label htmlFor="name">
                        <FiUser color="#9B9B9B" />
                        <input type="text" id="name" name="name" autoFocus placeholder="Usuário" value={user.name} onChange={(e) => setUsername(e.target.value)}/>
                    </Label>
                    <Label htmlFor="email">
                        <HiOutlineMail color="#9B9B9B" />
                        <input type="email" id="email" name="email" placeholder="Email" value={user.email} onChange={(e) => setEmail(e.target.value)}/>
                    </Label>
                    <Label htmlFor="pass">
                        <FiLock color="#9B9B9B" />
                        <input type="password" id="pass" name="password" placeholder="Senha atual" onChange={(e) => setOldPass(e.target.value)}/>
                    </Label>
                    <Label htmlFor="confirm-pass">
                        <FiLock color="#9B9B9B" />
                        <input type="password" id="confirm-pass" placeholder="Nova senha" onChange={(e) => setNewPass(e.target.value)}/>
                    </Label>
                        <ImgContainer>
                            {avatars.map(item => (
                                <ImgPerfil src={item} check={item === user.avatar_url}/>
                            ))}
                        </ImgContainer>
                    <Button>Editar</Button>
                    <Button type="delete">Excluir conta</Button>
                </Form>
            </Container>
            <div className="backgroundMenu"></div>
        </>
    )
}