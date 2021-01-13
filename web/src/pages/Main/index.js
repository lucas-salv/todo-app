import { useState, useEffect, useContext } from 'react';
import { Container, TaskContainer, MainContainer, Title } from './styles';
import Header from './../../components/Header';
import AddTaskForm from './../../components/AddTaskForm';
import Task from './../../components/Task';
import EditTaskForm from './../../components/EditTaskForm';

import api from './../../utils/api';
import { Context } from './../../utils/AuthContext';

export default function Main() {
    const { user, setUser, dataActivated } = useContext(Context);
    const [isEditTaskForm, setEditTaskForm] = useState(false);
    const [getTasks, ] = useState([1, 2, 3, 4])
    const [index, setIndex] = useState();

    useEffect(() => {
        (async () => {
            const {data} = await api.get('/user');
            setUser(data);
          })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const EditTaskFormAnimation = (index) => {
        setEditTaskForm(!isEditTaskForm);
        setIndex(index);
    }

    return (
        <>
            {user === undefined ? <h1>Loading...</h1> : 
            <Container>
                <Header/>
                <MainContainer>
                {dataActivated ? 
                    <>
                    <AddTaskForm />
                    <TaskContainer>
                        <EditTaskForm open={isEditTaskForm} setOpen={EditTaskFormAnimation} id={index}/>
                        <Title>Tarefas - {dataActivated ? dataActivated.id : null}</Title>
                        {dataActivated.tasks.map((item, index) => (
                            <Task key={index} onClick={EditTaskFormAnimation} id={index}/>
                        ))}
                    </TaskContainer>
                    </>
                 : 
                 <h3>Selecione um grupo de tarefas ou adicione um.</h3>
                }
                </MainContainer>
            </Container>
            }
        </>
    )
}