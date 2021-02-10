import { useState } from 'react';
import { FiPlus } from 'react-icons/fi'
import { Form, Title, Label, Button } from './styles';

import api from './../../utils/api';

export default function AddTaskForm({ groupName, groupId }) {
    const [titleTask, setTitleTask] = useState('');

    const addTask = async () => {
        await api.post('/task', {
            group_task_id: groupId,
            title_task: titleTask
        });
        setTitleTask('');
    }

    const pressEnterAddTask = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            document.getElementById('addTaskBtn').click();
        }
    }

    return (
        <Form>
            <Title>{groupName}</Title>
            <Label>
                <input type="text" placeholder="Nome da tarefa..." value={titleTask} onChange={(e) => setTitleTask(e.target.value)} onKeyUp={pressEnterAddTask} />
                <Button id="addTaskBtn" onClick={addTask}>
                    <FiPlus color="#FFF" size={20}/>
                </Button>
            </Label>
            
        </Form>
    )
}