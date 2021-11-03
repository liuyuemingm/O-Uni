import './App.css';
import Navbar from './components/Background';
import LogB from './components/Sample';
import MainPanel from './components/MainPanel';
import { Tab } from '@mui/material';
import LabTabs from './components/Tab';
import Register from './components/Register';
import Login from './components/Axios_Login';
import PostRequest from './components/LoginAxios';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Login />
      <LogB />
      <MainPanel />
      {/* <LabTabs /> */}
    </div>
  );
}

export default App;
