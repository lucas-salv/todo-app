import { FiPlus } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { TitleContainer, Title, Button, GroupContainer, Text, Group } from './styles';

export default function GroupTask() {
    return (
        <>
            <TitleContainer>
                <Title>Grupo de Tarefas</Title>
                <Button><FiPlus color="#FFF" size={18} /></Button>
            </TitleContainer>
            <GroupContainer>
                <Text>Todos os grupos</Text>
                <Group active>
                    <p className="name">Nome do grupo</p>
                    <button className="edit-button">
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