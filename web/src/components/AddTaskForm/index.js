import { useState } from 'react';
import { FiPlus } from 'react-icons/fi'
import { Form, Title, Label, Button } from './styles';

import api from './../../utils/api';

export default function AddTaskForm({ groupName, groupId }) {
    const [titleTask, setTitleTask] = useState();

    const addTask = async () => {
        await api.post('/task', {
            group_task_id: groupId,
            title_task: titleTask
        })
    }

    return (
        <Form>
            <Title>{groupName}</Title>
            <Label>
                <input type="text" placeholder="Nome da tarefa" onChange={(e) => setTitleTask(e.target.value)} />
                <Button onClick={addTask}>
                    <FiPlus color="#FFF" size={20}/>
                </Button>
            </Label>
            
        </Form>
    )
}