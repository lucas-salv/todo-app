import { FiLayers } from 'react-icons/fi'
import { LogoComponent, TitleLogo } from './styles';

export default function Logo() {
    return (
        <LogoComponent>
            <FiLayers color="#38A0FF" size={32} />
            <TitleLogo>To-Do App</TitleLogo>
        </LogoComponent>
    )
}