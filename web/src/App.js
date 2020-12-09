//import Login from './pages/Login';
import Main from './pages/Main';
import { colors } from './utils/colors';

import GlobalStyles from './utils/globalStyles';
import { ThemeProvider } from 'styled-components';


export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}
