//import Login from './pages/Login';
import { useState } from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import { lightTheme, darkTheme } from './utils/colors';
import GlobalStyles from './utils/globalStyles';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './utils/AuthContext';


export default function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <AuthProvider>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <Router history={history}>
            <Routes setTheme={setIsLightTheme} theme={isLightTheme}/>
          </Router>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}
