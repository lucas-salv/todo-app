import {useState} from 'react';
import { FiPlus, FiEdit3 } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { TitleContainer, Title, Form, Label, Button, GroupContainer, Text, Group } from './styles';
import DropDownMenu from './../DropDownMenu';

export default function GroupTask() {
    const [isDropDown, setDropDown] = useState(false);
    const [isEditGroup, setEditGroup] = useState(false);

    const DropDownAnimation = () => {
        setDropDown(!isDropDown);
    }

    const EditGroupAnimation = () => {
        setEditGroup(!isEditGroup);
    }

    return (
        <>
            <TitleContainer>
                <Title>Grupos de Tarefas</Title>
                <Form action="#">
                    <Label>
                        <input type="text" placeholder="Nome do Grupo" />
                        <Button>
                            <FiPlus color="#FFF" size={20}/>
                        </Button>
                    </Label>
                    
                </Form>
            </TitleContainer>
            <GroupContainer>
                <Text>Todos os grupos</Text>
                <Group active>
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
                <Group>
                    <p className="name">Nome do grupo</p>
                    <button className="edit-button">
                        <HiOutlineDotsVertical className="eb-icon" />
                    </button>
                </Group>
            </GroupContainer>
        </>

    )
}