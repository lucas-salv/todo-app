import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Container, Tag, Button } from './styles';
import { Checkbox } from '@trendmicro/react-checkbox';
import '@trendmicro/react-checkbox/dist/react-checkbox.css';

import { tagColors } from './../../utils/colors';
import api from './../../utils/api';

export default function Task({ onClick, id, groupId, data }) {
    const [isChecked, setCheckbox] = useState(false);
    console.log(data);

    const checkboxToggle = () => {
        setCheckbox(!isChecked);
    }

    const removeTask = async () => {
        await api.delete(`/task/${groupId}/${data.task_id}`);
    }

    return (
            <Container color="#38A0FF" checked={isChecked} >

                <Checkbox onClick={checkboxToggle} checked={isChecked}/>
                <div className="content-container" onClick={() => isChecked ? '' : onClick(id, data)}>
                    <div className="task-container">
                        <p className="title">id0{data.task_id} - {data.title_task}</p>
                        <div className="tagContainer">
                            {data.tags.map((item, index) => (
                                <Tag color={tagColors[item]} key={index} />
                            ))}
                            
                        </div>
                    </div>
                </div>
                <Button onClick={removeTask}>
                    <FiTrash2 className="trashIcon" />
                </Button>
            </Container>
    )
}