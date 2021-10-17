import './App.css';
import Navbar from './components/Background';
import LogB from './components/Sample';
import MainPanel from './components/MainPanel';
import { Tab } from '@mui/material';
import LabTabs from './components/Tab';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <LogB />
      <MainPanel />
      {/* <LabTabs /> */}
    </div>
  );
}

export default App;
