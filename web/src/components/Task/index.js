import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Container, Tag, Button } from './styles';
import { Checkbox } from '@trendmicro/react-checkbox';
import '@trendmicro/react-checkbox/dist/react-checkbox.css';
import EditTaskForm from './../EditTaskForm';

export default function Task() {
    const [isEditTaskForm, setEditTaskForm] = useState(false);

    const EditTaskFormAnimation = () => {
        setEditTaskForm(!isEditTaskForm);
    }

    return (
        <>
            <Container color="#38A0FF" checked={false} onClick={EditTaskFormAnimation} >
                <Checkbox />


                <div className="content-container">
                    <div className="task-container">
                        <p className="title">Lorem ipsum dolor et...</p>
                        <div className="tagContainer">
                            <Tag color="#ed7e2f" />
                            <Tag color="#ed2f2f" />
                            <Tag color="#38A0FF" />
                        </div>
                    </div>
                    <Button>
                        <FiTrash2 className="trashIcon" />
                    </Button>
                </div>
            </Container>
            <EditTaskForm open={isEditTaskForm} setOpen={EditTaskFormAnimation}/>
        </>
    )
}