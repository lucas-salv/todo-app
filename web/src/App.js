import Login from './pages/Login';

// global styles
import { createGlobalStyle } from 'styled-components';

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
    <>
    <GlobalStyles />
    <div className="App">
      <Login />
    </div>
    </>
  );
}
