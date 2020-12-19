import { FiEdit3, FiChevronLeft } from 'react-icons/fi';
import { Container, Form, Title, Label, Date } from './styles';
import Button from './../Button';
import Link from './../Link';

export default function EditTaskForm({ open, setOpen }) {
    return (
        <>
            <Container open={open}>
                <Form action="#">
                    <Link setOpen={setOpen}>
                        <FiChevronLeft />
                        Voltar
                    </Link>
                    <Title>Editar Tarefa</Title>
                    <Label htmlFor="title">
                        <FiEdit3 color="#9B9B9B" />
                        <input type="text" id="title" name="title" autoFocus placeholder="Título" />
                    </Label>
                    <Label htmlFor="desc">
                        <textarea id="desc" name="desc" placeholder="Descrição da tarefa" />
                    </Label>
                    <Date>Criada em 01/12/20</Date>
                    <Button>Editar</Button>
                </Form>
            </Container>
            <div className="backgroundMenu"></div>
        </>
    )
}