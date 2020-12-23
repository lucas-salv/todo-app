import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Container, Tag, Button } from './styles';
import { Checkbox } from '@trendmicro/react-checkbox';
import '@trendmicro/react-checkbox/dist/react-checkbox.css';

export default function Task({ onClick, id }) {
    const [isChecked, setCheckbox] = useState(false);

    const checkboxToggle = () => {
        setCheckbox(!isChecked);
    }

    return (
            <Container color="#38A0FF" checked={isChecked} onClick={() => isChecked ? '' : onClick(id)} >
                <Checkbox onClick={checkboxToggle} checked={isChecked}/>


                <div className="content-container">
                    <div className="task-container">
                        <p className="title">id0{id} - Lorem ipsum dolor et...</p>
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
    )
}