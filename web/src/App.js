import Login from './pages/Login';
import { colors } from './utils/colors';

// global styles
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 1px;
  }
`

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
