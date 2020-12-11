import { FiTrash2 } from 'react-icons/fi';
import { Container, TitleTask, ContentContainer, TaskContainer, Button, TagContainer, Tag } from './styles';

export default function Task() {
    return (
        <Container color="#38A0FF">
            <input type="checkbox" />
            
            <ContentContainer>
                <TaskContainer>
                    <TitleTask>Lorem ipsum dolor et...</TitleTask>
                    <TagContainer>
                        <Tag color="#ed7e2f" />
                        <Tag color="#ed2f2f" />
                        <Tag color="#38A0FF" />
                    </TagContainer>
                </TaskContainer>
                <Button>
                    <FiTrash2 className="trashIcon" />
                </Button>
            </ContentContainer>
        </Container>
    )
}