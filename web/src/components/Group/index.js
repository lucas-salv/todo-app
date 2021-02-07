import { useState, useEffect, useContext } from 'react';
import { Label, Button, Group } from './styles';
import { FiEdit3 } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import DropDownMenu from './../DropDownMenu';

import api from './../../utils/api';
import { Context } from './../../utils/AuthContext';

export default function GroupItem({ data, initialData, isActive, setActiveIndex, index, onClick }) {
    const { setDataActivated } = useContext(Context);
    const [isDropDown, setDropDown] = useState(false);
    const [isEditGroup, setEditGroup] = useState(false);
    const [groupTitle, setGroupTitle] = useState();
    const [titleEdit, setTitleEdit] = useState('');

    useEffect(() => {
        return isActive ? onClick() : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        document.addEventListener('click', e => {
            if(e.path.indexOf(document.getElementById(`group-${data.id}`)) < 0) {
                setDropDown(false);
                setEditGroup(false);
            }
        });

    }, []);

    useEffect(() => {
        return isActive ? setDataActivated(data) : null;
    }, [data]);

    useEffect(() => {
        setGroupTitle(data.title_group_task);
    }, [data.title_group_task]);

    const DropDownAnimation = () => {
        setDropDown(!isDropDown);
    }

    const EditGroupAnimation = () => {
        setEditGroup(!isEditGroup);
    }

    const editGroupApi = async () => {
        try {
            await api.put(`/task-group/${data.id}`, {
                title_group_task: titleEdit
            });
            setGroupTitle(titleEdit);
            setEditGroup(false);
            setTitleEdit('');
        } catch(err) {
            console.log(err)
        }
    }

    const removeGroupTask = async () => {
        try {
            await api.delete(`/task-group/${data.id}`);
            if(index === 0) {
                setActiveIndex(index);
                setDataActivated(initialData[index + 1]);
            } else {
                setActiveIndex(index - 1);
                setDataActivated(initialData[index - 1]);
            }
        } catch(err) {
            console.log(err);
        }
    }

    const pressEnterEdit = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            document.getElementById(`editBtn-${data.id}`).click();
        }
    }

    return (
        <Group id={`group-${data.id}`} active={isActive}>
            <div onClick={onClick}>
                <p className="name">{groupTitle}</p>
                <Label open={isEditGroup}>
                    <input type="text" placeholder="Nome da tarefa" value={titleEdit} onChange={(e) => setTitleEdit(e.target.value)} onKeyUp={pressEnterEdit} />
                    <Button id={`editBtn-${data.id}`} onClick={editGroupApi}>
                        <FiEdit3 color="#FFF" size={20}/>
                    </Button>
                </Label>
            </div>
            <button className="edit-button" onClick={DropDownAnimation}>
                <DropDownMenu open={isDropDown} position="bottom">
                    <li onClick={EditGroupAnimation}>Editar Grupo</li>
                    <li onClick={removeGroupTask}>Excluir Grupo</li>
                </DropDownMenu>
                <HiOutlineDotsVertical className="eb-icon" />
            </button>
        </Group>
    )
}