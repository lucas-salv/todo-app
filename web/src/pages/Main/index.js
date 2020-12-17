import { Container, TaskContainer, MainContainer, Title } from './styles';
import Header from './../../components/Header';
import AddTaskForm from './../../components/AddTaskForm';
import Task from './../../components/Task';

export default function Main() {
    return (
        <Container>
            <Header />
            <MainContainer>
                <AddTaskForm />
                <TaskContainer>
                    <Title>Tarefas</Title>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </TaskContainer>
            </MainContainer>
        </Container>
    )
}