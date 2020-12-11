import { Container, TaskContainer, Title } from './styles';
import Header from './../../components/Header';
import AddTaskForm from './../../components/AddTaskForm';
import Task from './../../components/Task';

export default function Main() {
    return (
        <Container>
            <Header />
            <AddTaskForm />
            <TaskContainer>
                <Title>Tarefas</Title>
                <Task />
                <Task />
                <Task />
                <Task />
            </TaskContainer>
        </Container>
    )
}