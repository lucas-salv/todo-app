import { Btn } from './styles';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa'

export default function HandleThemeBtn({ setTheme, theme }) {
    console.log(theme);

    return (
        <Btn onClick={() => setTheme(!theme)}>
            {theme ? 
            <FaLightbulb color="#FFF" size={18}/>
            :
            <FaRegLightbulb color="#121212" size={18} />
            }
        </Btn>
    )
}