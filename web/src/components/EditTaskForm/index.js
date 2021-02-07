import { useState, useEffect } from 'react';
import { FiEdit3, FiChevronLeft } from 'react-icons/fi';
import { Container, Form, Title, Label, Date, ErrorModal, SuccessModal, Button } from './styles';
import Link from './../Link';
import api from './../../utils/api';
import errorFunction from './../../utils/errorFunction';

export default function EditTaskForm({ open, setOpen, id, data }) {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [status, setStatus] = useState(false);
    const [successStatus, setSuccessStatus] = useState(false);

    useEffect(() => {
        setTitle(data ? data.title_task : '');
        setDesc(data ? data.desc_task : '');
    }, [data]);

    useEffect(() => {
        document.addEventListener('click', e => {
            if(e.path.indexOf(document.getElementById('modal')) < 0) {
                setSuccessStatus(false);
            }
        });
    }, []);

    const validateForm = (title, desc) => {
        if(title === data.title_task && desc === data.desc_task){
            setStatus(true);
            return;
        } else {
            return {
                group_task_id: id,
                title_task: title,
                desc_task: desc
            }
        }
    }

    const clickBtnEdit = async (e) => {
        e.preventDefault();
        const formData = validateForm(title, desc);
        console.log(formData);
        if(formData){
            try{
                const res = await api.put(`/task/${data.task_id}`, formData);
                if(res.status === 200) setSuccessStatus(true);
                setOpen();
            } catch(err){
                setStatus(errorFunction(err.response.status))
            }
        }
    }

    return (
        <>
            <SuccessModal id="modal" status={successStatus}><p>Tarefa editada com sucesso!</p></SuccessModal>
            <Container open={open}>
                {!data ? <h3>Loading</h3> : 
                <Form>
                    <Link setOpen={() => setOpen()}>
                        <FiChevronLeft />
                        Voltar
                    </Link>
                    <Title>Editar Tarefa - {JSON.stringify(data)}</Title>
                    <ErrorModal status={status}><p>Ops! Algo deu errado. Mude os valores ou tente novamente!</p></ErrorModal>
                    <Label htmlFor="title">
                        <FiEdit3 color="#9B9B9B" />
                        <input type="text" id="title" name="title" autoFocus placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
                    </Label>
                    <Label htmlFor="desc">
                        <textarea id="desc" name="desc" placeholder="Descrição da tarefa" value={desc} onChange={e => setDesc(e.target.value)} />
                    </Label>
                    <Date>{data.date}</Date>
                    <Button
                        onClick={clickBtnEdit}
                    >Editar</Button>
                </Form>
                }
            </Container>
            <div className="backgroundMenu" onClick={() => setOpen()}></div>
        </>
    )
}