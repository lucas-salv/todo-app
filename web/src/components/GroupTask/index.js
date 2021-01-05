import { useContext, useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi'
import { TitleContainer, Title, Form, Label, Button, GroupContainer, Text } from './styles';
import Group from './../Group';

import api from './../../utils/api';
import { Context } from './../../utils/AuthContext';
import { socket } from './../../utils/socketIo';

export default function GroupTask() {
    const { user } = useContext(Context);
    const [groupName, setGroupName]  = useState();
    const [data, setData] = useState();

    useEffect(() => {
        socket.on('addGroup', content => {
            
            console.log(data, content);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/task-groups/${user.id}`);
            setData(data);
          })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addGroupTask = async () => {
        try{
            const response = await api.post('/task-group', { user_id: user.id, title_group_task: groupName });
            console.log(response);

        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <TitleContainer>
                <Title>Grupos de Tarefas</Title>
                <Form>
                    <Label>
                        <input type="text" placeholder="Nome do Grupo" onChange={(e) => setGroupName(e.target.value)} />
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