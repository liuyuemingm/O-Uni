import './App.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Signup from './components/Axios_Signup';
import MainPanel from './components/MainPanel';
import Login from './components/Axios_Login';
import Axios_AppBar from './components/Axios_AppBar';




const theme = createTheme({
  palette: {
    primary: {
      main: red[900]
    },
    secondary: {
      main: "#ffffff"
    }
  }
});

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Axios_AppBar />

        <div style={{ display: "flex", margin: "20px 10px" }}>
          <Login />
          <Signup />

        </div>


        <MainPanel />
      </ThemeProvider>
    </div>
  );
}

export default App;
