import { FaTasks } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import { Container, MainMenu, SecondaryMenu, Item } from './styles';

export default function Menu({ open }) {
    return (
        <Container open={open}>
            
            <MainMenu>
                <Item active >
                    <FaTasks className="icon" size={20} />
                </Item>
                <Item>
                    <BsInfoCircle className="icon" size={20} />
                </Item>
            </MainMenu>
            <SecondaryMenu>

            </SecondaryMenu>
        </Container>
    )
}