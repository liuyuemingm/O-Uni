import './App.css';
import Navbar from './components/Background';
import LogB from './components/Sample';
import MainPanel from './components/MainPanel';
import { Tab } from '@mui/material';
import LabTabs from './components/Tab';
import Register from './components/Register';
import Login from './components/Axios_Login';
import PostRequest from './components/LoginAxios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';




const theme = createTheme({
  palette: {
    primary: {
      main: red[900]
    }
  }
});

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Login />
        <MainPanel />
      </ThemeProvider>
    </div>
  );
}

export default App;
