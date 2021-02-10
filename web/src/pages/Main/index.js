import { useState, useEffect, useContext } from 'react';
import { Container, TaskContainer, MainContainer, Title, LoaderContainer } from './styles';
import Header from './../../components/Header';
import AddTaskForm from './../../components/AddTaskForm';
import Task from './../../components/Task';
import EditTaskForm from './../../components/EditTaskForm';
import Loading from './../../components/Loading';
import HandleThemeBtn from './../../components/HandleThemeBtn';
import api from './../../utils/api';
import { Context } from './../../utils/AuthContext';

export default function Main({ setTheme, theme }) {
    const { user, setUser, dataActivated } = useContext(Context);
    const [isEditTaskForm, setEditTaskForm] = useState(false);
    const [editFormData, setEditFormData] = useState();
    const [, setIndex] = useState();

    useEffect(() => {
        (async () => {
            const {data} = await api.get('/user');
            setUser(data);
          })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const EditTaskFormAnimation = (index, data) => {
        setEditFormData(data);
        setEditTaskForm(!isEditTaskForm);
        setIndex(index);
    }

    return (
        <>
            {user === undefined ?
            <LoaderContainer>
                <Loading />
            </LoaderContainer> 
            : 
            <Container>
                <Header/>
                <MainContainer>
                {dataActivated ? 
                    <>
                    <AddTaskForm groupName={dataActivated.title_group_task} groupId={dataActivated.id} />
                    <TaskContainer>
                        <EditTaskForm open={isEditTaskForm} setOpen={EditTaskFormAnimation} id={dataActivated.id} data={editFormData} />
                        <Title>Tarefas</Title>
                        {dataActivated.tasks.map((item, index) => (
                            <Task key={index} onClick={EditTaskFormAnimation} id={index} groupId={dataActivated.id} data={item}/>
                        ))}
                    </TaskContainer>
                    </>
                 : 
                 <h3>Selecione um grupo de tarefas ou adicione um.</h3>
                }
                </MainContainer>
                <HandleThemeBtn setTheme={setTheme} theme={theme}/>
            </Container>
            }
        </>
    )
}