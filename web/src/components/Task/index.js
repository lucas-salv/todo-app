import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Container, Tag, Button } from './styles';
import { Checkbox } from '@trendmicro/react-checkbox';
import '@trendmicro/react-checkbox/dist/react-checkbox.css';

import { tagColors } from './../../utils/colors';

export default function Task({ onClick, id, data }) {
    const [isChecked, setCheckbox] = useState(false);
    console.log(data);

    const checkboxToggle = () => {
        setCheckbox(!isChecked);
    }

    return (
            <Container color="#38A0FF" checked={isChecked} onClick={() => isChecked ? '' : onClick(id)} >
                <Checkbox onClick={checkboxToggle} checked={isChecked}/>


                <div className="content-container">
                    <div className="task-container">
                        <p className="title">id0{data.task_id} - {data.title_task}</p>
                        <div className="tagContainer">
                            {data.tags.map((item, index) => (
                                <Tag color={tagColors[item]} key={index} />
                            ))}
                            
                        </div>
                    </div>
                    <Button>
                        <FiTrash2 className="trashIcon" />
                    </Button>
                </div>
            </Container>
    )
}