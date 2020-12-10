import { FiTrash2 } from 'react-icons/fi';
import { Container, TitleTask, ContentContainer, TaskContainer, TagContainer, Tag } from './styles';

export default function Task() {
    return (
        <Container>
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
                <FiTrash2 color="#9B9B9B" />
            </ContentContainer>
        </Container>
    )
}