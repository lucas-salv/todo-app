import { FiPlus } from 'react-icons/fi'
import { Form, Title, Label, Button } from './styles';

export default function AddTaskForm() {
    return (
        <Form action="#">
            <Title>Nome do grupo</Title>
            <Label>
                <input type="text" placeholder="Nome da tarefa" />
                <Button>
                    <FiPlus color="#FFF" size={20}/>
                </Button>
            </Label>
            
        </Form>
    )
}