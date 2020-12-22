import { useState } from 'react';
import { Label, Button, Group } from './styles';
import { FiEdit3 } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import DropDownMenu from './../DropDownMenu';

export default function GroupItem({active}) {
    const [isDropDown, setDropDown] = useState(false);
    const [isEditGroup, setEditGroup] = useState(false);

    const DropDownAnimation = () => {
        setDropDown(!isDropDown);
    }

    const EditGroupAnimation = () => {
        setEditGroup(!isEditGroup);
    }

    return (
        <Group active={active}>
            <p className="name">Nome do grupo</p>
            <Label className="float" open={isEditGroup}>
                <input type="text" placeholder="Nome da tarefa" />
                <Button>
                    <FiEdit3 color="#FFF" size={20}/>
                </Button>
            </Label>
            <button className="edit-button" onClick={DropDownAnimation}>
            <DropDownMenu open={isDropDown} position="bottom">
                <li onClick={EditGroupAnimation}>Editar Grupo</li>
                <li>Excluir Grupo</li>
            </DropDownMenu>
            <HiOutlineDotsVertical className="eb-icon" />
        </button>
        </Group>
    )
}