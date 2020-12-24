//import Login from './pages/Login';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import { colors } from './utils/colors';

import GlobalStyles from './utils/globalStyles';
import { ThemeProvider } from 'styled-components';


export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <div className="App">
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    </ThemeProvider>
  );
}
