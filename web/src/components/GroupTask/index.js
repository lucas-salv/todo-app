import {useState} from 'react';
import { FiPlus } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { TitleContainer, Title, Form, Label, Button, GroupContainer, Text, Group } from './styles';
import DropDownMenu from './../DropDownMenu';

export default function GroupTask() {
    const [isDropDown, setDropDown] = useState(false);

    const DropDownAnimation = () => {
        setDropDown(!isDropDown);
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
                    <button className="edit-button" onClick={DropDownAnimation}>
                        <DropDownMenu open={isDropDown} position="bottom">
                            <li>Editar Grupo</li>
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