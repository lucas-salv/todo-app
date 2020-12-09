import { Container } from './styles';
import Header from './../../components/Header';
import AddTaskForm from './../../components/AddTaskForm';

export default function Main() {
    return (
        <Container>
            <Header />
            <AddTaskForm />
        </Container>
    )
}