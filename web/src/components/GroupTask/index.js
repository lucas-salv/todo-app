import { useContext, useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi'
import { TitleContainer, Title, Form, Label, Button, GroupContainer, Text } from './styles';
import Group from './../Group';

import api from './../../utils/api';
import { Context } from './../../utils/AuthContext';

export default function GroupTask() {
    const { user } = useContext(Context);
    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/task-groups/${user.id}`);
            setData(data);
          })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addGroupTask = () => {

    }

    return (
        <>
            <TitleContainer>
                <Title>Grupos de Tarefas</Title>
                <Form action="#">
                    <Label>
                        <input type="text" placeholder="Nome do Grupo" />
                        <Button onClick={addGroupTask}>
                            <FiPlus color="#FFF" size={20}/>
                        </Button>
                    </Label>
                    
                </Form>
            </TitleContainer>
            <GroupContainer>
                <Text>Todos os grupos</Text>
                {data ? data.group_task.map((item, index) => (
                    <Group key={index} data={item} />
                )) : <h1>Loading...</h1>}
            </GroupContainer>
        </>

    )
}