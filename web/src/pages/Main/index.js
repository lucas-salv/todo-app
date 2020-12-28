import { useState, useContext } from 'react';
import { Container, TaskContainer, MainContainer, Title } from './styles';
import Header from './../../components/Header';
import AddTaskForm from './../../components/AddTaskForm';
import Task from './../../components/Task';
import EditTaskForm from './../../components/EditTaskForm';

import { Context } from './../../utils/AuthContext';

export default function Main() {
    const { user } = useContext(Context);
    const [isEditTaskForm, setEditTaskForm] = useState(false);
    const [getTasks, ] = useState([1, 2, 3, 4])
    const [index, setIndex] = useState();

    const EditTaskFormAnimation = (index) => {
        setEditTaskForm(!isEditTaskForm);
        setIndex(index);
    }

    console.log(user);

    return (
        <Container>
            <Header />
            <MainContainer>
                <AddTaskForm />
                <TaskContainer>
                    <EditTaskForm open={isEditTaskForm} setOpen={EditTaskFormAnimation} id={index}/>
                    <Title>Tarefas</Title>
                    {getTasks.map((item, index) => (
                        <Task key={index} onClick={EditTaskFormAnimation} id={index}/>
                    ))}
                </TaskContainer>
            </MainContainer>
        </Container>
    )
}