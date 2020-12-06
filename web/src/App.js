import Login from './pages/Login';
import { colors } from './utils/colors';

import GlobalStyles from './utils/globalStyles';
import { ThemeProvider } from 'styled-components';


export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}
