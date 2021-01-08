import { useState, useEffect, useContext } from 'react';
import { Label, Button, Group } from './styles';
import { FiEdit3 } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import DropDownMenu from './../DropDownMenu';

import api from './../../utils/api';
import { Context } from './../../utils/AuthContext';

export default function GroupItem({ data, isActive, onClick }) {
    const { user } = useContext(Context);
    const [isDropDown, setDropDown] = useState(false);
    const [isEditGroup, setEditGroup] = useState(false);
    const [groupTitle, setGroupTitle] = useState(data.title_group_task);

    useEffect(() => {
        return isActive ? onClick() : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const DropDownAnimation = () => {
        setDropDown(!isDropDown);
    }

    const EditGroupAnimation = () => {
        setEditGroup(!isEditGroup);
    }

    const editGroupApi = async () => {
        try {
            await api.put(`/task-group/${data.id}`, {
                user_id: user.id,
                title_group_task: groupTitle
            });
            setEditGroup(false);
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <Group active={isActive} onClick={onClick}>
            <p className="name">{groupTitle}</p>
            <Label open={isEditGroup}>
                <input type="text" placeholder="Nome da tarefa" onChange={(e) => setGroupTitle(e.target.value)} />
                <Button onClick={editGroupApi}>
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