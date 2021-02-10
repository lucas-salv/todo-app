import { Btn } from './styles';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa'

export default function HandleThemeBtn({ setTheme, theme }) {
    return (
        <Btn onClick={() => setTheme(!theme)}>
            {theme ? 
            <FaLightbulb color="#FFF" size={18}/>
            :
            <FaRegLightbulb color="#FFF" size={18} />
            }
        </Btn>
    )
}