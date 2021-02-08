import { useContext, useEffect, useState, useReducer } from 'react';
import { FiPlus } from 'react-icons/fi'
import { TitleContainer, Form, Label, Button, GroupContainer, Text } from './styles';
import Group from './../Group';

import api from './../../utils/api';
import { Context } from './../../utils/AuthContext';
import { socket } from './../../utils/socketIo';

const groupTaskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, ...action.payload];
        case 'EDIT':
            return state.map(item => item.id === action.payload[0].id ? action.payload[0] : item);
        case 'DEL':
            console.log(state, action.payload[0]);
            const filt = state.filter(item => item.id !== action.payload[0].id);
            console.log(filt);
            return filt;
        default:
            throw new Error();
    }
}

export default function GroupTask() {
    const { setDataActivated } = useContext(Context);
    const [groupName, setGroupName]  = useState('');
    const [groups, dispatch] = useReducer(groupTaskReducer, []);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        socket.on('addGroup', content => {
            dispatch({ type: 'ADD', payload: [content]})
        })

        socket.on('editGroup', content => {
            dispatch({ type: 'EDIT', payload: [content]})
        })

        socket.on('removeGroup', content => {
            dispatch({ type: 'DEL', payload: [content]});
        })

        socket.on('addNewTask', content => {
            dispatch({ type: 'EDIT', payload: [content] });
        })

        socket.on('removeTask', content => {
            dispatch({ type: 'EDIT', payload: [content] });
        })

        socket.on('editTask', content => {
            dispatch({ type: 'EDIT', payload: [content]});
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/task-groups`);
            dispatch({type: 'ADD', payload: data.group_task});
          })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addGroupTask = async () => {
        try{
            await api.post('/task-group', { title_group_task: groupName });
            setGroupName('');
        } catch(err) {
            console.log(err);
        }
    }

    const handleActiveIndex = (index, item) => {
        setActiveIndex(index);
        setDataActivated(item);
    }

    const noGroup = () => {
        setDataActivated(undefined);
        return <h4>Nenhum grupo encontrado</h4>
    }

    const pressEnterAdd = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            document.getElementById('addGroupBtn').click();
        }
    }

    return (
        <>
            <TitleContainer>
                
                <Form>
                    <Label>
                        <input type="text" placeholder="Adicionar grupo..." value={groupName} onChange={(e) => setGroupName(e.target.value)} onKeyUp={pressEnterAdd} />
                        <Button id="addGroupBtn" onClick={addGroupTask}>
                            <FiPlus color="#FFF" size={20}/>
                        </Button>
                    </Label>    
                </Form>
            </TitleContainer>
            <GroupContainer>
                <Text>Grupos de tarefas</Text>
                {groups.length > 0 ? groups.map((item, index) => (
                    <Group key={index} data={item} isActive={activeIndex === index} initialData={groups} index={index} setActiveIndex={setActiveIndex} onClick={() => handleActiveIndex(index, item)} />
                )) : noGroup()}
            </GroupContainer>
        </>

    )
}