import { FaTasks } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import { Container, MainMenu, SecondaryMenu, Item } from './styles';
import GroupTask from './../GroupTask';

export default function Menu({ open, setOpen }) {
    return (
        <>
            <Container open={open}>
                
                <MainMenu>
                    <Item active >
                        <FaTasks className="icon" size={18} />
                    </Item>
                    <Item>
                        <BsInfoCircle className="icon" size={18} />
                    </Item>
                </MainMenu>
                <SecondaryMenu>
                    <GroupTask setMenu={setOpen}/>
                </SecondaryMenu>
            </Container>
            <div className="backgroundMenu" onClick={() => setOpen(false)}></div>
        </>
    )
}