import { FiLock, FiUser, FiChevronLeft } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import { Container, Form, Title, Label, ImgContainer, ImgPerfil } from './styles';
import Button from './../Button';
import Link from './../Link';

export default function EditUserForm({ open, setOpen }) {
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
                        <ImgContainer>
                            <ImgPerfil />
                            <ImgPerfil />
                            <ImgPerfil />
                            <ImgPerfil />
                            <ImgPerfil />
                            <ImgPerfil />
                            <ImgPerfil />
                            <ImgPerfil />
                        </ImgContainer>
                    <Button>Editar</Button>
                    <Button type="delete">Excluir conta</Button>
                </Form>
            </Container>
            <div className="backgroundMenu"></div>
        </>
    )
}